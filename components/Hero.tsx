import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-48 pb-12 sm:pb-24 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          Modern SaaS solution for modern problems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-8"
        >
          We provide the best tools for your business to grow and succeed. Our platform is easy to use, scalable, and secure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Start your free trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;