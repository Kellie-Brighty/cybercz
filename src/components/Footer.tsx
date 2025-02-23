import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-bnb-dark/50 border-t border-bnb-yellow/20 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SocialLinks className="justify-center mb-4" />
        <p className="text-gray-400 mb-2">
          Disclaimer: This is a parody site. Not financial advice. 
          CZ probably knows how to use DEXTools (we think).
        </p>
        <p className="text-bnb-yellow/60 text-sm">
          © 2024 Cyber CZ • Built with 💛 and lots of irony
        </p>
      </div>
    </footer>
  );
};

export default Footer; 