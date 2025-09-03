import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">HomeschoolIndia</span>
            </div>
            <p className="text-gray-300 mb-4">
              Supporting homeschooling families across India with resources, guidance, and community support.
            </p>
            <div className="flex space-x-4">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">info@homeschoolindia.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/nios-guide" className="text-gray-300 hover:text-white transition-colors">NIOS Guide</Link></li>
              <li><Link href="/study-materials" className="text-gray-300 hover:text-white transition-colors">Study Materials</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/legal" className="text-gray-300 hover:text-white transition-colors">Legal Info</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 HomeschoolIndia. All rights reserved. Empowering families through education.
          </p>
        </div>
      </div>
    </footer>
  );
}
