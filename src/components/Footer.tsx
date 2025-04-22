const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black-dark py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-yellow font-montserrat font-bold text-2xl">
              DS
            </a>
            <p className="text-gray-light mt-2 font-roboto text-sm">
              Profesjonalne strony internetowe i aplikacje webowe.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <ul className="flex space-x-6 mb-4 justify-center md:justify-end">
              <li>
                <a href="#about" className="text-gray-light hover:text-yellow transition-colors font-roboto">
                  O Mnie
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-light hover:text-yellow transition-colors font-roboto">
                  Projekty
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-light hover:text-yellow transition-colors font-roboto">
                  Umiejętności
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-light hover:text-yellow transition-colors font-roboto">
                  Kontakt
                </a>
              </li>
            </ul>
            
            <p className="text-gray-light font-roboto text-sm">
              &copy; {currentYear} Dorian Suliński. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
