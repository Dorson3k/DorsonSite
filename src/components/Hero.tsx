import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center relative">
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-yellow opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gray-light">Cześć, jestem </span>
            <span className="text-yellow">Dorian Suliński</span>
          </h1>
          <h2 className="font-montserrat text-2xl md:text-3xl lg:text-4xl text-gray-light mb-8">
            <span className="inline-block">Programista Stron WWW</span>
          </h2>
          <p className="font-roboto text-gray-medium max-w-3xl mx-auto text-lg mb-10">
            Tworzę nowoczesne, responsywne i wydajne aplikacje internetowe, które pomagają firmom 
            i osobom prywatnym osiągać ich cele w internecie.
          </p>
          <button 
            className="bg-yellow hover:bg-yellow-dark text-black font-montserrat font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Porozmawiajmy
          </button>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToAbout}>
        <ArrowDown className="text-yellow" size={32} />
      </div>
    </section>
  );
};

export default Hero;
