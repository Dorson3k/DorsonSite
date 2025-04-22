import { Link, Github, ArrowRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl, liveUrl, githubUrl }: ProjectProps) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-700">
      {/* Project Image */}
      <div className="h-60 bg-black-light relative group">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black-light">
            <span className="text-yellow text-5xl font-bold">DS</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow text-black p-2 rounded-full hover:bg-yellow-dark transition-colors"
              >
                <Link size={20} />
              </a>
            )}
            
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-light font-roboto mb-4 text-sm">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-montserrat bg-yellow bg-opacity-20 text-yellow px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <button className="flex items-center text-yellow font-montserrat font-medium text-sm hover:text-yellow-light transition-colors">
          <span>Zobacz więcej</span>
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-commerce Platform",
      description: "Pełnoprawna platforma sklepowa z systemem płatności, koszykiem i panelem administracyjnym.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Fotograficzne",
      description: "Responsywna strona dla fotografa z galerią zdjęć, systemem filtrowania i animacjami.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Aplikacja SPA",
      description: "Single Page Application prezentująca dane z zewnętrznego API w interaktywny sposób.",
      technologies: ["Vue.js", "REST API", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Blog Tematyczny",
      description: "System blogowy z funkcjonalnością komentarzy, kategorii i wyszukiwania treści.",
      technologies: ["WordPress", "PHP", "MySQL", "SCSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Aplikacja do Zarządzania Zadaniami",
      description: "Narzędzie do planowania i śledzenia postępów w projektach z wieloma funkcjami.",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Strona Firmowa",
      description: "Profesjonalna strona internetowa dla lokalnego biznesu z formularzem kontaktowym.",
      technologies: ["Bootstrap", "jQuery", "PHP", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow font-montserrat mb-3">Moje Projekty</h2>
          <div className="h-1 w-20 bg-yellow mx-auto"></div>
          <p className="text-gray-light font-roboto mt-6 max-w-2xl mx-auto">
            Poniżej znajduje się wybór moich prac. Każdy projekt to efekt pasji do tworzenia
            funkcjonalnych i estetycznych rozwiązań internetowych.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow hover:bg-yellow-dark text-black font-montserrat font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center"
          >
            <span>Zobacz wszystkie projekty</span>
            <Github size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
