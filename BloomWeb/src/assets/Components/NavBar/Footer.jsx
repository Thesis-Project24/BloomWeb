import React from "react";

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Bloom
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
            <li className="hover:underline me-4 md:me-6">About</li>
            <li className="hover:underline me-4 md:me-6">Privacy Policy</li>
            <li className="hover:underline me-4 md:me-6">Become a Doctor</li>
            <li className="hover:underline me-4 md:me-6">Contact</li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Bloom™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
