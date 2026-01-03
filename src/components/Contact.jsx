import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Build the POST body as URL-encoded string (required by Netlify)
    const encodedBody = new URLSearchParams({
      "form-name": "contact", // Must match the form name
      ...formData,
    }).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedBody,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section
      id="contact"
      className="section-container bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "animate-slide-down" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Have a project in mind? Let's work together to bring your ideas to
            life
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div
            ref={infoRef}
            className={`${infoVisible ? "animate-slide-right" : "opacity-0"}`}
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Let's Connect
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach
                  out!
                </p>

                <div className="space-y-6">
                  <div className="group flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-blue-200 dark:border-blue-800">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-md group-hover:shadow-lg transform group-hover:rotate-12 transition-all duration-300">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:rajbanshi7610@gmail.com"
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        rajbanshi7610@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 hover:from-green-100 hover:to-teal-100 dark:hover:from-green-900/30 dark:hover:to-teal-900/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-green-200 dark:border-green-800">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-md group-hover:shadow-lg transform group-hover:rotate-12 transition-all duration-300">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+9779849625264"
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                      >
                        +977 9849625264
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 hover:from-pink-100 hover:to-rose-100 dark:hover:from-pink-900/30 dark:hover:to-rose-900/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-pink-200 dark:border-pink-800">
                    <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-md group-hover:shadow-lg transform group-hover:rotate-12 transition-all duration-300">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Location
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        Available for Remote Work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`${formVisible ? "animate-slide-left" : "opacity-0"}`}
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send a Message
                </h3>

                <form
                  name="contact"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div>
                    {/* Honeypot field for spam protection (hidden from users) */}
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform focus:scale-[1.02]"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform focus:scale-[1.02]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform focus:scale-[1.02] resize-none"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === "sending"
                      ? "Sending..."
                      : status === "success"
                      ? "✓ Message Sent!"
                      : status === "error"
                      ? "✗ Error. Try Again."
                      : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
