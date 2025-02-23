import { motion } from 'framer-motion';
import CyberLogo from './CyberLogo';
import SocialLinks from './SocialLinks';
import { useState } from 'react';

const ChartIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4v16h16" strokeLinecap="round" />
    <path d="M7 12v4" strokeLinecap="round" />
    <path d="M11 8v8" strokeLinecap="round" />
    <path d="M15 6v10" strokeLinecap="round" />
    <path d="M19 9v5" strokeLinecap="round" />
  </svg>
);

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xfd89480d60b44135315db725e87d33c5478e1ccd";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-10 animate-gradient-x" />
      
      {/* Floating CZ Image - Visible on all screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute right-0 top-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-auto"
      >
        <div className="relative">
          <img 
            src="/assets/cz-one.jpg" 
            alt="CZ" 
            className="w-full h-[200px] lg:w-[300px] lg:h-[400px] object-cover opacity-20 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 lg:rounded-l-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-bnb-dark via-transparent to-bnb-dark lg:rounded-l-3xl" />
        </div>
      </motion.div>
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <CyberLogo className="w-24 h-24 sm:w-48 sm:h-48 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="text-bnb-yellow">Cyber</span> CZ
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 px-4"
        >
          <div 
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-4 py-2 bg-bnb-dark/50 rounded-lg border border-bnb-yellow/20 cursor-pointer hover:bg-bnb-yellow/10 transition-all group max-w-full"
          >
            <span className="text-sm sm:text-base font-mono text-gray-400 truncate max-w-[180px] sm:max-w-none">
              {contractAddress}
            </span>
            <span className="text-bnb-yellow text-sm whitespace-nowrap flex items-center gap-1">
              {copied ? (
                "Copied!"
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" />
                    <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" />
                  </svg>
                  Copy
                </>
              )}
            </span>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 px-4 sm:px-8 leading-relaxed"
        >
          The new version of CZ is a cyber one. He is currently learning how to use DEX and other basic 
          cyber-related aspects of cryptocurrency. Could CZ be the new cyber man?
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <a 
            href="https://www.dextools.io/app/en/bnb/pair-explorer/0x1322cb281ea22110a330ec3915c6b5fa954db625"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-bnb-yellow text-bnb-dark px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>View Chart</span>
            <ChartIcon />
          </a>
          <a 
            href="http://t.me/cyberczbnb"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-bnb-yellow text-bnb-yellow px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-bnb-yellow/10 transition-all"
          >
            Join the Journey
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <SocialLinks className="justify-center" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 