import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50 backdrop-blur-md fixed top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-white">SaaSify</a>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
                <Link href="/#features">
                    <a className="text-gray-300 hover:text-white transition-colors">Features</a>
                </Link>
            </li>
            <li>
                <Link href="/pricing">
                    <a className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </Link>
            </li>
          </ul>
        </nav>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
