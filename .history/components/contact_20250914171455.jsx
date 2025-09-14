npm "use client"
import React from "react";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactLinks = [
    { name: MdEmail, href: "mailto:amrma7mouddev05@gmail.com", innerText: "Amr.Mahmoud.Dev05@gmail.com", catagory: "Email" },
    { name: FaWhatsapp, href: "https://wa.me/+201033050549", innerText: "+201033050549", catagory: "Phone" },
    { name: FaLinkedin, href: "https://www.linkedin.com/in/amr-mahmoud-/", innerText: "Amr Mahmoud", catagory: "LinkedIn" },
    { name: FaGithub, href: "https://github.com/Amr-Ma7moud", innerText: "Amr Mahmoud", catagory: "GitHub" },
    { name: MapPin, href: "", innerText: "Borg Al-Arab, Alexandria, Egypt", catagory: "Location" },
    { name: FaClock, href: "", innerText: "Usually Within 24 hours", catagory: "Response Time" }
    ];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "" // Honeypot field for spam protection
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, "success", or "error"
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check honeypot field
        if (formData.honeypot) {
            return; // Likely a bot, don't submit
        }

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // In a real application, you would send the form data to your backend
            // For now, we'll simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulate random success/failure for demonstration
            const isSuccess = Math.random() > 0.3;

            if (isSuccess) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
            } else {
                throw new Error("Server error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-40 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute top-32 right-32 w-80 h-80 bg-indigo-500 rounded-full filter blur-2xl opacity-15" style={{animation: 'pulse 6s ease-in-out infinite 1s'}}></div>
                <div className="absolute bottom-40 left-32 w-64 h-64 bg-pink-500 rounded-full filter blur-2xl opacity-20" style={{animation: 'pulse 5s ease-in-out infinite 2s'}}></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 sm:mb-16 px-4" data-aos={"zoom-in"} data-aos-duration={1000 } >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Get In{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Touch
                    </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Have a project in mind or want to collaborate? Feel free to reach
                        out to me using the form below or through my contact information.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6 mb-10">
                            {contactLinks
                            .filter((link) =>
                                [ FaWhatsapp, MdEmail ,FaClock ,MapPin].includes(link.name))
                            .map((link, index) => 
                            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all"
                            data-aos={"zoom-in-right"} data-aos-duration={1000 + index * 300} 
                            >
                                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                                    {React.createElement(link.name, { size: 20 })}
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">{link.catagory}</h4>
                                    { link.href ?
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.innerText}
                                    </a> : link.innerText}
                                </div>
                            </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-800 shadow-xl"
                            data-aos={"zoom-in-left"} data-aos-duration={1500} 
                        >
                            <div className="flex items-center gap-2 mb-4 sm:mb-6">
                                <MessageCircle className="text-purple-500" size={20} />
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Send me a message</h3>
                            </div>

                            {submitStatus === "success" && (
                                <div className="mb-6 p-4 bg-green-900/30 border border-green-800 rounded-lg text-green-400">
                                    Thank you for your message! I'll get back to you within 24 hours.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-400">
                                    There was an error sending your message. Please try again or contact me directly via email.
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Honeypot field for spam protection */}
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={formData.honeypot}
                                    onChange={handleChange}
                                    className="hidden"
                                    tabIndex="-1"
                                    autoComplete="off"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium mb-2 text-gray-300"
                                        >
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                                                errors.name ? "border-red-500" : "border-gray-700"
                                            }`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium mb-2 text-gray-300"
                                        >
                                            Your Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                                                errors.email ? "border-red-500" : "border-gray-700"
                                            }`}
                                            placeholder="john@domain.com"
                                        />
                                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium mb-2 text-gray-300"
                                    >
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                                            errors.subject ? "border-red-500" : "border-gray-700"
                                        }`}
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2 text-gray-300"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                                            errors.message ? "border-red-500" : "border-gray-700"
                                        }`}
                                        placeholder="Hello, I'd like to talk about..."
                                    />
                                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}