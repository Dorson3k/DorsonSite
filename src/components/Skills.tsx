import { Code } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

const SkillBar = ({ name, level }: SkillProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-montserrat font-medium">{name}</h4>
        <span className="text-yellow font-montserrat">{level}%</span>
      </div>
      <div className="w-full bg-black-light h-3 rounded-md overflow-hidden">
        <div 
          className="bg-yellow h-full rounded-md"
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => {
  return (
    <div className="bg-black-light p-6 rounded-lg shadow-lg border border-gray-800 hover:border-yellow transition-colors duration-300">
      <div className="text-yellow mb-4 inline-block p-3 bg-yellow bg-opacity-10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-white font-montserrat font-semibold text-xl mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-light font-roboto">
            <span className="w-2 h-2 bg-yellow rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const frontendSkills: SkillProps[] = [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "SCSS/Tailwind", level: 90 }
  ];
  
  const backendSkills: SkillProps[] = [
    { name: "Node.js", level: 85 },
    { name: "PHP", level: 75 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 75 }
  ];
  
  const otherSkills: SkillCardProps[] = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: [
        "Responsive Design",
        "Frontend Frameworks (React, Vue)",
        "CSS Frameworks",
        "UI/UX Design Principles",
        "Progressive Web Apps"
      ]
    },
    {
      title: "Backend",
      icon: <Code size={24} />,
      skills: [
        "RESTful APIs",
        "Database Design",
        "Server Management",
        "Authentication & Authorization",
        "Performance Optimization"
      ]
    },
    {
      title: "Narzędzia & Metodologie",
      icon: <Code size={24} />,
      skills: [
        "Git/GitHub",
        "Docker",
        "Agile/Scrum",
        "CI/CD",
        "Testing (Jest, Cypress)"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow font-montserrat mb-3">Umiejętności</h2>
          <div className="h-1 w-20 bg-yellow mx-auto"></div>
          <p className="text-gray-light font-roboto mt-6 max-w-2xl mx-auto">
            Ciągle rozwijam swoje umiejętności, aby oferować najlepsze rozwiązania dla każdego projektu.
            Poniżej znajdziesz technologie, z którymi pracuję na co dzień.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div>
            <h3 className="text-white font-montserrat font-semibold text-xl mb-6">Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-white font-montserrat font-semibold text-xl mb-6">Backend</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
