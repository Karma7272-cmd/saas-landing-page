import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-extrabold text-white mb-4">Ready to get started?</h2>
        <p className="text-lg text-gray-300 mb-8">Start your free 14-day trial today. No credit card required.</p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
          Sign Up Now
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;