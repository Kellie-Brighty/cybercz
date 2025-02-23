import { motion } from 'framer-motion';

const Tokenomics = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12"
        >
          <span className="text-bnb-yellow">DEX</span> Mastery Tokenomics
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-b from-bnb-dark to-cyber-purple/10 p-6 rounded-xl border border-bnb-yellow/20"
          >
            <h3 className="text-2xl font-bold text-bnb-yellow mb-4">Buy Tax</h3>
            <p className="text-6xl font-bold">0%</p>
            <p className="text-gray-400 mt-2">Because even CZ needs to learn about taxes</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-bnb-dark to-cyber-purple/10 p-6 rounded-xl border border-bnb-yellow/20"
          >
            <h3 className="text-2xl font-bold text-bnb-yellow mb-4">Sell Tax</h3>
            <p className="text-6xl font-bold">0%</p>
            <p className="text-gray-400 mt-2">Nice.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 