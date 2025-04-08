// import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// export type Theme = "light" | "dark" | "system";

// type ThemeContextType = { 
//   theme: Theme; 
//   setTheme: (theme: Theme) => void; 
//   toggleTheme: () => void 
// };

// // Create context with proper initial value
// const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   setTheme: () => {},
//   toggleTheme: () => {}
// });

// // Safe localStorage wrapper that fails silently
// const safeLocalStorage = {
//   getItem: (key: string): string | null => {
//     try {
//       if (typeof window !== "undefined") {
//         return localStorage.getItem(key);
//       }
//     } catch (error) {
//       // Silent failure
//     }
//     return null;
//   },
//   setItem: (key: string, value: string): void => {
//     try {
//       if (typeof window !== "undefined") {
//         localStorage.setItem(key, value);
//       }
//     } catch (error) {
//       // Silent failure
//     }
//   }
// };

// // Check if we have localStorage access
// const hasLocalStorageAccess = (): boolean => {
//   try {
//     const testKey = '__test_storage__';
//     localStorage.setItem(testKey, 'test');
//     localStorage.removeItem(testKey);
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

// // Memory storage fallback when localStorage is unavailable
// const memoryStorage: { [key: string]: string } = {};

// // Storage interface that automatically chooses between localStorage and memory
// const storage = {
//   getItem: (key: string): string | null => {
//     if (hasLocalStorageAccess()) {
//       return localStorage.getItem(key);
//     }
//     return memoryStorage[key] || null;
//   },
//   setItem: (key: string, value: string): void => {
//     if (hasLocalStorageAccess()) {
//       localStorage.setItem(key, value);
//     } else {
//       memoryStorage[key] = value;
//     }
//   }
// };

// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   // Use a safer initialization approach
//   const [theme, setThemeState] = useState<Theme>("light");
  
//   // Initialize theme from storage safely
//   useEffect(() => {
//     const savedTheme = storage.getItem("theme") as Theme;
//     if (savedTheme && (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system")) {
//       setThemeState(savedTheme);
//     }
//   }, []);

//   const setTheme = (newTheme: Theme) => {
//     setThemeState(newTheme);
//     storage.setItem("theme", newTheme);
//   };

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     // Apply theme
//     const root = document.documentElement;

//     // Determine effective theme
//     let effectiveTheme = theme;
//     if (theme === 'system') {
//       try {
//         effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//       } catch (error) {
//         effectiveTheme = 'light'; // Fallback
//       }
//     }

//     // Update classes
//     root.classList.remove('light', 'dark');
//     root.classList.add(effectiveTheme);

//     // System theme listener
//     if (theme === 'system') {
//       try {
//         const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//         const updateSystemTheme = (e: MediaQueryListEvent) => {
//           root.classList.remove('light', 'dark');
//           root.classList.add(e.matches ? 'dark' : 'light');
//         };

//         darkModeMediaQuery.addEventListener('change', updateSystemTheme);
//         return () => darkModeMediaQuery.removeEventListener('change', updateSystemTheme);
//       } catch (error) {
//         // Silent failure
//       }
//     }
//   }, [theme]);

//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextType = { 
  theme: Theme; 
  setTheme: (theme: Theme) => void; 
  toggleTheme: () => void 
};

// Create context with default light theme
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {}
});

// Try to use cookies as fallback for theme storage
const setCookie = (name: string, value: string, days = 365) => {
  try {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
    return true;
  } catch (e) {
    return false;
  }
};

const getCookie = (name: string): string | null => {
  try {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  } catch (e) {
    return null;
  }
};

// Memory storage as final fallback
const memoryStorage: { [key: string]: string } = {};

// Universal storage interface
const universalStorage = {
  getItem: (key: string): string | null => {
    try {
      // Try localStorage first
      const lsValue = localStorage.getItem(key);
      if (lsValue !== null) return lsValue;
    } catch (e) {
      // Silent failure
    }
    
    // Try cookies next
    const cookieValue = getCookie(key);
    if (cookieValue !== null) return cookieValue;
    
    // Fall back to memory
    return memoryStorage[key] || null;
  },
  
  setItem: (key: string, value: string): void => {
    // Try all storage methods in sequence
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      setCookie(key, value);
    }
    
    // Always store in memory as final fallback
    memoryStorage[key] = value;
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Default to light theme
  const [theme, setThemeState] = useState<Theme>("light");
  
  // Initialize theme on component mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const savedTheme = universalStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system")) {
      setThemeState(savedTheme);
    } else {
      // Explicitly set default theme in storage if none exists
      universalStorage.setItem("theme", "light");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    universalStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Apply theme to document
    const root = document.documentElement;

    // Calculate effective theme
    let effectiveTheme = theme;
    if (theme === 'system') {
      try {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } catch (error) {
        effectiveTheme = 'light'; // Fallback
      }
    }

    // Update classes
    root.classList.remove('light', 'dark');
    root.classList.add(effectiveTheme);

    // System theme listener
    if (theme === 'system') {
      try {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateSystemTheme = (e: MediaQueryListEvent) => {
          root.classList.remove('light', 'dark');
          root.classList.add(e.matches ? 'dark' : 'light');
        };

        darkModeMediaQuery.addEventListener('change', updateSystemTheme);
        return () => darkModeMediaQuery.removeEventListener('change', updateSystemTheme);
      } catch (error) {
        // Silent failure
      }
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);