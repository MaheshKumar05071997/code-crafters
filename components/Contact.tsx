"use client";
import { useState } from "react";

export default function Contact() {
  // Use the name stored here for the success modal so it doesn't disappear on form reset
  const [submittedName, setSubmittedName] = useState("");

  // PASTE YOUR GOOGLE SHEET WEB APP URL HERE
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxRg-DnocDqZzsM7X7bU0KultEJjGPkfAlYTelEfO2CXnw-DGRF--8CaGvCPiV2GX3C/exec";

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    project: "Mobile App Development",
    message: "",
  });

  // State for Validation Errors (Includes Name & Email now)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle Input Changes & Auto-clear Errors
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-clear error for the specific field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", mobile: "", message: "" };

    // 1. Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    // 2. Email Validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // 3. Mobile Number Validation (10 digits, numeric)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    // 4. Message Word Count Validation (Min 20 words)
    const wordCount = formData.message
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0).length;
    if (wordCount < 20) {
      newErrors.message = `Description is too short. Please add ${
        20 - wordCount
      } more words.`;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // --- FIX: Save name first, then show modal, then clear form ---
      setSubmittedName(formData.name);
      setShowSuccessModal(true);

      // Reset Form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        project: "Mobile App Development",
        message: "",
      });
      setErrors({ name: "", email: "", mobile: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <p className="text-teal-400 font-bold tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Great Together.
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info (Left) */}
          <div className="lg:w-1/3 space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              Ready to start? Fill out the form and I will get back to you
              within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium">
                    aditya.adiverma.verma@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Form (Right) */}
          <div className="lg:w-2/3 bg-slate-900 border border-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field (Now Validated) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    // DYNAMIC CLASS: Turns Red if error exists
                    className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-teal-500"
                    }`}
                    onChange={handleChange}
                    value={formData.name}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field (Now Validated) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    // DYNAMIC CLASS: Turns Red if error exists
                    className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-teal-500"
                    }`}
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Mobile Number Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    className={`w-full bg-slate-950 border rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none transition-colors ${
                      errors.mobile
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-teal-500"
                    }`}
                    onChange={handleChange}
                    value={formData.mobile}
                    maxLength={10}
                  />
                </div>
                {errors.mobile && (
                  <p className="text-xs text-red-400 mt-1">{errors.mobile}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Interested In
                </label>
                <select
                  name="project"
                  className="w-full bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  onChange={handleChange}
                  value={formData.project}
                >
                  <option>Mobile App Development</option>
                  <option>Web Development</option>
                  <option>Business Automation / Scripting</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-700 focus:border-teal-500"
                  }`}
                  placeholder="Tell me about your requirement.."
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>

                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <p
                    className={`text-xs text-right mt-1 ${
                      errors.message ? "text-red-400" : "text-gray-500"
                    }`}
                  >
                    Words:{" "}
                    {
                      formData.message
                        .trim()
                        .split(/\s+/)
                        .filter((w) => w.length > 0).length
                    }{" "}
                    / 20
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(45,212,191,0.3)]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CUSTOM SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 border border-teal-500/50 rounded-2xl p-8 max-w-sm w-full shadow-[0_0_50px_rgba(45,212,191,0.2)] transform transition-all scale-100 opacity-100 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent!
            </h3>
            {/* Using submittedName here ensures it persists even after form reset */}
            <p className="text-gray-400 mb-6">
              Thanks for reaching out, <b>{submittedName || "Client"}</b>.{" "}
              <br />I will get back to you within 24 hours.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-black font-bold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
