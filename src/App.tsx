import Hero from './components/Hero';
import IronicJourney from './components/IronicJourney';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bnb-dark min-h-screen text-white font-cyber">
      <main>
        <Hero />
        <IronicJourney />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  );
}

export default App; 