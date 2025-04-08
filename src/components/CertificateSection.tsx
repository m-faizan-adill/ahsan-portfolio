import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { PDFViewer } from "./ui/pdf-viewer";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    category: string;
    imagePath: string;
}

const certificates: Certificate[] = [
    {
        id: "cert1",
        title: "Complete Javascript & jQuery Courses wih Bonus Vue JS Intro",
        issuer: "Udemy",
        date: "Oct. 1 ,2024",
        category: "development",
        imagePath: "/certificates/complete java examples.pdf",
    },
    {
        id: "cert2",
        title: "Modern Javascript for React JS - ES6",
        issuer: "Udemy",
        date: "Oct 2, 2021",
        category: "development",
        imagePath: "/certificates/es6 cert.pdf",
    },
    {
        id: "cert3",
        title: "HTML5 and CSS3 Build:Two Responsive Website in Hindi/Urdu",
        issuer: "Udemy",
        date: "July 2, 2021",
        category: "development",
        imagePath: "/certificates/html and css3 certificate by kushal.jpg",
    },
    // {
    //     id: "cert4",
    //     title: "HTML5 and CSS3 Build: Two Responsive Websites in Hindi || Urdu",
    //     issuer: "Udemy",
    //     date: "July 2, 2021",
    //     category: "development",
    //     imagePath: "/certificates/html and css3 kushal certificate.pdf",
    // },
    {
        id: "cert5",
        title: "Introduction to Web Development [HTML, CSS, JAVASCRIPT]",
        issuer: "Udemy",
        date: "July 18, 2021",
        category: "development",
        imagePath: "/certificates/intro to html,css and js cert.jpg",
    },
    // {
    //     id: "cert6",
    //     title: "Introduction to Web Development [HTML, CSS, JAVASCRIPT]",
    //     issuer: "Udemy",
    //     date: "July 18, 2021",
    //     category: "development",
    //     imagePath: "/certificates/intro to java,css, html cert.pdf",
    // },
    {
        id: "cert7",
        title: "Python for beginners - Learn all the basics of python",
        issuer: "Udemy",
        date: "July 13, 2021",
        category: "development",
        imagePath: "/certificates/python for beginners.jpg",
    },
    // {
    //     id: "cert8",
    //     title: "Python for beginners - Learn all the basics of python",
    //     issuer: "Udemy",
    //     date: "July 13, 2021",
    //     category: "development",
    //     imagePath: "/certificates/python for beginners.pdf",
    // },
    {
        id: "cert9",
        title: "Freelancing: 37 Ways to Make Money From Home as a Freelancer",
        issuer: "Udemy",
        date: "June 26, 2021",
        category: "management",
        imagePath: "/certificates/UC-4bd20f4d-a952-4b37-a28d-9fbbeaf72fc7.jpg",
    },
];

const categories = [
    { value: "all", label: "All Certificates" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    // { value: "cloud", label: "Cloud" },
    { value: "database", label: "Database" },
    // { value: "devops", label: "DevOps" },
    { value: "management", label: "Management" },
];

const CertificateSection = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCertificates = certificates.filter((cert) =>
        activeCategory === "all" ? true : cert.category === activeCategory
    );

    const handleCertificateClick = (certificate: Certificate) => {
        setSelectedCertificate(certificate);
        setIsDialogOpen(true);
    };

    const displayCertificate = (cert: Certificate) => {
        if (cert.imagePath.endsWith('.pdf')) {
            return <PDFViewer url={cert.imagePath} />;
        } else {
            return (
                <img
                    src={cert.imagePath}
                    alt={cert.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                />
            );
        }
    };

    return (
        <section id="certificates" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-950 dark:to-gray-900">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-2">My Certificates</h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-12">Professional development and achievements</p>

                <Tabs defaultValue="all" className="w-full mb-10" onValueChange={setActiveCategory}>
                    <div className="flex justify-center mb-8">
                        <div className="relative w-full overflow-hidden">
                            <div className="relative overflow-x-auto no-scrollbar">
                                <TabsList className="flex sm:grid sm:grid-cols-7 gap-2 min-w-max px-1">
                                    {categories.map((category) => (
                                        <TabsTrigger
                                            key={category.value}
                                            value={category.value}
                                            className="whitespace-nowrap px-3 py-2"
                                        >
                                            {category.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>

                            {/* Optional visual scroll hint arrows */}
                            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-100 dark:from-gray-950 to-transparent pointer-events-none sm:hidden" />
                            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-100 dark:from-gray-950 to-transparent pointer-events-none sm:hidden" />
                        </div>
                    </div>

                    {categories.map((category) => (
                        <TabsContent key={category.value} value={category.value} className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCertificates.map((certificate) => (
                                    <motion.div
                                        key={certificate.id}
                                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                        onClick={() => handleCertificateClick(certificate)}
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 flex flex-col h-full">
                                            <div className="flex-grow">
                                                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                                                <p className="text-gray-500 dark:text-gray-400 mb-1">
                                                    <span className="font-medium">Issuer:</span> {certificate.issuer}
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    <span className="font-medium">Date:</span> {certificate.date}
                                                </p>
                                            </div>
                                            <Button variant="outline" className="mt-4 w-full self-end">
                                                View Certificate
                                            </Button>
                                        </div>

                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {selectedCertificate && (
                    <DialogContent className="max-w-4xl w-[90vw]">
                        <DialogHeader>
                            <DialogTitle>{selectedCertificate.title}</DialogTitle>
                            <DialogDescription>
                                Issued by {selectedCertificate.issuer} on {selectedCertificate.date}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                            {selectedCertificate && displayCertificate(selectedCertificate)}
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </section>
    );
}

export default CertificateSection