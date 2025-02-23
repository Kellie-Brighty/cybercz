import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'DEX Mastery',
      description: "Learn the ins and outs of decentralized exchanges with CZ's expert guidance.",
      icon: '🔄'
    },
    {
      title: 'Cyber Innovation',
      description: 'Explore cutting-edge cryptocurrency technologies and future trends.',
      icon: '🚀'
    },
    {
      title: 'Digital Evolution',
      description: 'Be part of the next generation of crypto leaders in the digital age.',
      icon: '🌐'
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-bnb-dark to-cyber-purple/10 p-6 rounded-2xl border border-bnb-yellow/20 hover:border-bnb-yellow/50 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-bnb-yellow">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 