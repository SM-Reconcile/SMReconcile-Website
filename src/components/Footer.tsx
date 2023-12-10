import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 z-30 w-full border-t bg-green-700/75 text-zinc-50 backdrop-blur-lg transition-all">
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0">
            <span className="text-3xl font-bold tracking-wider">
              SMReconcile.
            </span>
            {/* Add your logo or additional branding here */}
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-end mt-4">
            <div className="md:text-center">
              <p className="mb-2 md:text-xl text-lg underline">Contact Us</p>
              <div className="text-sm md:text-md ">
                <p>Address: 601 Laxcon Plaza, Nerul Mumbai</p>
                <p>Phone: +91 9702029653</p>
                <p>Email: smreconcile.enquire@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-zinc-200" />
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Reconcile. All Rights Reserved.
          </p>
          <p className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-zinc-50 hover:text-white transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-zinc-50 hover:text-white transition-all"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
