"use client"

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

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
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach
                        out to me using the form below or through my contact information.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <a
                                        href="mailto:Amr.Mahmoud.Dev05@gmail.com"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Amr.Mahmoud.Dev05@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Phone</h4>
                                    <a
                                        href="tel:+201033050549"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        +20 103 305 0549
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Response Time</h4>
                                    <p className="text-gray-400">Usually Within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Location</h4>
                                    <p className="text-gray-400">Alexandria, Egypt</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mb-10">
                            <h3 className="text-xl font-semibold mb-4">Location</h3>
                            <div className="rounded-lg overflow-hidden h-48 border border-gray-800">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13648.755291466227!2d29.91854876977538!3d31.20081799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38e2c5f59b3%3A0x529a7d40e8dd822!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2sus!4v1654567890123!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Alexandria, Egypt Map"
                                ></iframe>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Amr-Ma7moud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
                                    aria-label="GitHub"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/amr-mahmoud-"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-blue-400 transition-all"
                                    aria-label="Twitter"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-2 mb-6">
                                <MessageCircle className="text-purple-500" size={24} />
                                <h3 className="text-2xl font-semibold">Send me a message</h3>
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

                                <p className="text-gray-500 text-sm text-center">
                                    * Required fields. I typically respond within 24 hours on weekdays.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}