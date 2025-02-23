interface CyberLogoProps {
  className?: string;
}

const CyberLogo = ({ className = '' }: CyberLogoProps) => (
  <div className={`relative ${className}`}>
    <img 
      src="/assets/cz-two.jpg" 
      alt="CZ Logo" 
      className="rounded-full object-cover w-full h-full border-4 border-bnb-yellow"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bnb-dark/30 rounded-full" />
  </div>
);

export default CyberLogo; 