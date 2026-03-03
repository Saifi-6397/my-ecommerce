import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 1. Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              MY<span className="text-blue-500">SHOP</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Aapka apna favorite online store. Best quality products, har waqt, har jagah.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Shop All</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* 3. Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* 4. Newsletter & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-2xl hover:text-blue-500 transition"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-700 transition"><FaLinkedin /></a>
            </div>
            <p className="text-sm">Email: support@myshop.com</p>
          </div>

        </div>

        <hr className="border-gray-800 my-8" />

        {/* Copyright Section */}
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} MyShop. All rights reserved. Made by Khaleel Ahmad.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;