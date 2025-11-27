import { Link } from 'react-router-dom';
import { Wallet, Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">KharchaPal</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              India's smartest way to track your money.<br />
              Cash. UPI. Bank. Cards. Loans. Goals.<br />
              One app. One clear picture. Zero confusion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 KharchaPal. All rights reserved. Made with ❤️ in India.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
