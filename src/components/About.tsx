import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow font-montserrat mb-3">O Mnie</h2>
          <div className="h-1 w-20 bg-yellow mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-full md:w-5/12 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-yellow">
                {/* Placeholder avatar - replace with your actual image */}
                <div className="w-full h-full bg-black-dark flex items-center justify-center">
                  <span className="text-yellow text-6xl font-montserrat font-bold">DS</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 md:bottom-5 md:right-1/4 bg-yellow text-black px-4 py-2 rounded-md shadow-lg font-montserrat font-semibold">
                5+ lat doświadczenia
              </div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="w-full md:w-7/12">
            <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-white mb-4">
              Pasjonat programowania i tworzenia nowoczesnych rozwiązań internetowych
            </h3>
            
            <p className="text-gray-light font-roboto mb-6 text-base">
              Jestem programistą specjalizującym się w tworzeniu stron i aplikacji internetowych. 
              Moja przygoda z kodowaniem zaczęła się kilka lat temu i od tego czasu nieustannie rozwijam swoje umiejętności, 
              śledząc najnowsze trendy i technologie w branży.
            </p>
            
            <p className="text-gray-light font-roboto mb-10 text-base">
              Moim celem jest tworzenie intuicyjnych, wydajnych i estetycznych rozwiązań, które 
              nie tylko wyglądają świetnie, ale przede wszystkim realizują cele biznesowe moich klientów. 
              Każdy projekt traktuję jako wyjątkowe wyzwanie i zawsze dążę do przekraczania oczekiwań.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow rounded-full mr-2"></span>
                <span className="text-gray-light font-roboto">Frontend Development</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow rounded-full mr-2"></span>
                <span className="text-gray-light font-roboto">Backend Development</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow rounded-full mr-2"></span>
                <span className="text-gray-light font-roboto">Responsywny Design</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow rounded-full mr-2"></span>
                <span className="text-gray-light font-roboto">Optymalizacja Wydajności</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow rounded-full mr-2"></span>
                <span className="text-gray-light font-roboto">UI/UX Design</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow rounded-full mr-2"></span>
                <span className="text-gray-light font-roboto">SEO</span>
              </li>
            </ul>
            
            <button className="flex items-center gap-2 bg-transparent border-2 border-yellow text-yellow px-6 py-3 rounded-md font-montserrat font-medium hover:bg-yellow hover:text-black transition-all duration-300">
              <FileText size={18} />
              Pobierz CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
