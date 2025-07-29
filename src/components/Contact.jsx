import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center md:text-left mb-10">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-800 dark:text-gray-300">
              I'm open to freelance work, collaborations, and internships. Feel
              free to reach out through the form or any of my socials below.
            </p>

            <div>
              <h4 className="font-semibold mb-2 text-black dark:text-white">
                Email:
              </h4>
              <a
                href="mailto:adewoleoluwatunmise@gmail.com"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <MdEmail className="text-lg" />
                adewoleoluwatunmise@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-black dark:text-white">
                Socials:
              </h4>
              <div className="flex gap-4 text-xl text-gray-700 dark:text-gray-300">
                <a
                  href="https://github.com/TunmiDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-black dark:hover:text-white" />
                </a>
                <a
                  href="https://ng.linkedin.com/in/oluwatunmiseadewole"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-blue-600" />
                </a>
                <a
                  href="https://wa.me/2348165302719"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="hover:text-green-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            action="https://formspree.io/f/xzzgwolw"
            method="POST"
            className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm"
          >
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-transparent focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
        © {new Date().getFullYear()} TunmiDev. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
