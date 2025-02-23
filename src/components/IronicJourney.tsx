import { motion } from 'framer-motion';

const IronicJourney = () => {
  const steps = [
    {
      title: "Step 1: Finding DEXScreener",
      description: "Watch as our crypto veteran discovers you can actually track tokens outside of Binance. Mind-blowing!",
      icon: "🔍"
    },
    {
      title: "Step 2: The Chart Revelation",
      description: "CZ learns that red means price go down, green means number go up. Revolutionary!",
      icon: "📊"
    },
    {
      title: "Step 3: Mastering Copy-Paste",
      description: "Witness the moment CZ discovers you can paste token addresses instead of typing them. True innovation!",
      icon: "📋"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Floating Image - Now visible on mobile */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        className="absolute left-0 top-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-auto"
      >
        <div className="relative">
          <img 
            src="/assets/cz-three.jpg" 
            alt="CZ Learning" 
            className="w-full h-[150px] lg:w-[250px] lg:h-[350px] object-cover opacity-20 lg:opacity-70 hover:opacity-100 transition-opacity duration-300 lg:rounded-r-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-bnb-dark via-transparent to-bnb-dark lg:rounded-r-3xl" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          <span className="text-bnb-yellow">Cyber</span> Journey
        </motion.h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-r from-bnb-dark to-cyber-purple/10 p-6 rounded-xl border border-bnb-yellow/20"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{step.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-bnb-yellow">{step.title}</h3>
                  <p className="text-gray-400 mt-2">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IronicJourney; 