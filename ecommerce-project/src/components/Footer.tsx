import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full">
      {/* Top Section with Brand Name and Social Icons */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Bandage
          </h1>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Facebook Icon */}
            <a href="#" className="text-blue-500 hover:text-blue-700" aria-label="Facebook">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Twitter Icon */}
            <a href="#" className="text-blue-500 hover:text-blue-700" aria-label="Twitter">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M23.944 4.569c-.883.391-1.83.656-2.818.777a4.928 4.928 0 0 0 2.164-2.723c-.925.548-1.957.94-3.052 1.153a4.92 4.92 0 0 0-8.457 4.492A13.98 13.98 0 0 1 1.67 3.149a4.918 4.918 0 0 0 1.522 6.571c-.786-.024-1.528-.242-2.173-.605v.061a4.918 4.918 0 0 0 3.949 4.827c-.528.145-1.08.222-1.648.222-.403 0-.796-.039-1.184-.114.794 2.482 3.103 4.29 5.85 4.335a9.864 9.864 0 0 1-6.125 2.115c-.398 0-.79-.023-1.176-.069a13.98 13.98 0 0 0 7.548 2.212c9.053 0 14.016-7.537 14.016-14.034 0-.214 0-.426-.014-.638.962-.697 1.798-1.566 2.45-2.564z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a href="#" className="text-pink-500 hover:text-pink-700" aria-label="Instagram">
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 2.2c3.2 0 3.6.01 4.8.07 1.17.05 1.98.24 2.46.41a4.92 4.92 0 0 1 1.78 1.14 4.92 4.92 0 0 1 1.14 1.78c.17.48.36 1.3.41 2.46.06 1.2.07 1.6.07 4.8s-.01 3.6-.07 4.8c-.05 1.17-.24 1.98-.41 2.46a4.92 4.92 0 0 1-1.14 1.78 4.92 4.92 0 0 1-1.78 1.14c-.48.17-1.3.36-2.46.41-1.2.06-1.6.07-4.8.07s-3.6-.01-4.8-.07c-1.17-.05-1.98-.24-2.46-.41a4.92 4.92 0 0 1-1.78-1.14 4.92 4.92 0 0 1-1.14-1.78c-.17-.48-.36-1.3-.41-2.46C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.8c.05-1.17.24-1.98.41-2.46a4.92 4.92 0 0 1 1.14-1.78 4.92 4.92 0 0 1 1.78-1.14c.48-.17 1.3-.36 2.46-.41C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.51.01-4.73.07-.99.05-1.53.22-1.88.36a3.06 3.06 0 0 0-1.12.75 3.06 3.06 0 0 0-.75 1.12c-.14.35-.3.89-.36 1.88-.06 1.22-.07 1.58-.07 4.73s.01 3.51.07 4.73c.05.99.22 1.53.36 1.88.18.46.48.86.75 1.12.26.26.66.56 1.12.75.35.14.89.3 1.88.36 1.22.06 1.58.07 4.73.07s3.51-.01 4.73-.07c.99-.05 1.53-.22 1.88-.36a3.06 3.06 0 0 0 1.12-.75 3.06 3.06 0 0 0 .75-1.12c.14-.35.3-.89.36-1.88.06-1.22.07-1.58.07-4.73s-.01-3.51-.07-4.73c-.05-.99-.22-1.53-.36-1.88a3.06 3.06 0 0 0-.75-1.12 3.06 3.06 0 0 0-1.12-.75c-.35-.14-.89-.3-1.88-.36-1.22-.06-1.58-.07-4.73-.07zm0 4.2a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6zm0 1.8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.7-.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
    />
  </svg>
</a>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Footer Sections */}
        {[
          {
            title: "Company Info",
            links: ["About Us", "Careers", "We are hiring", "Blog"],
          },
          {
            title: "Legal",
            links: ["Privacy Policy", "Licensing", "Terms & Conditions"],
          },
          {
            title: "Features",
            links: ["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"],
          },
        ].map((section, index) => (
          <div key={index}>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {section.title}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Subscription */}
        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-400">
            Subscribe to our newsletter for the latest updates and news.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm rounded-l-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="p-2 bg-sky-500 text-white text-sm rounded-r-lg hover:bg-sky-600 focus:ring focus:ring-sky-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          © 2024 <a href="#" className="hover:underline"></a>. Made with Love by SaniaKhawar. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
