import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const PricingPage: NextPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      features: ['Feature A', 'Feature B', 'Feature C'],
      period: 'per month'
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['All in Basic', 'Feature D', 'Feature E'],
      period: 'per month',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      features: ['All in Pro', '24/7 Support', 'Custom Integrations'],
      period: ''
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold text-white"
            >
              Pricing Plans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-300"
            >
              Choose the plan that's right for you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col ${
                  plan.featured ? 'border-2 border-primary' : ''
                }`}
              >
                {plan.featured && (
                  <div className="text-sm px-3 py-1 text-white bg-primary rounded-full self-start mb-4">Most Popular</div>
                )}
                <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">/month</span>}
                </div>
                <ul className="text-gray-300 space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-colors ${
                    plan.featured
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.price === 'Contact Us' ? 'Contact Sales' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
