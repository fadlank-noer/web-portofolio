import { useState } from 'preact/hooks';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Valtara Trade System",
    description: "Trading platform with real-time market data and portfolio management.",
    image: "https://placehold.co/56x56/cccccc/000000/png?text=M",
    category: "System",
    technologies: ["MQL5", "Python"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Modern portfolio website showcasing multiple frontend frameworks.",
    image: "/assets/projects/web-portofolio.png",
    category: "Fullstack",
    technologies: ["Astro", "React", "Vue", "Svelte", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'Fullstack', 'System'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div id="anchor-projects" className="w-screen min-h-screen bg-gray-50 py-16 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <i className="text-3xl text-gray-600">Portfolio</i>
          <h2 className="text-6xl font-bold my-4 bg-gradient-to-r from-(--primary-color) via-(--secondary-color) to-(--gradient-first) text-transparent bg-clip-text">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my work across different technologies and domains
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-white rounded-full p-2 shadow-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-(--primary-color) text-white shadow-md'
                    : 'text-gray-600 hover:text-(--primary-color) hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div class="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onLoad={(e) => {
                    // Hide loading overlay when image loads
                    const loadingDiv = e.currentTarget.parentElement?.querySelector('.loading-overlay') as HTMLElement;
                    if (loadingDiv) {
                      loadingDiv.style.opacity = '0';
                    }
                  }}
                  onError={(e) => {
                    // Show fallback when image fails
                    const fallbackDiv = e.currentTarget.parentElement?.querySelector('.fallback-overlay') as HTMLElement;
                    const loadingDiv = e.currentTarget.parentElement?.querySelector('.loading-overlay') as HTMLElement;
                    if (fallbackDiv) {
                      fallbackDiv.style.opacity = '1';
                    }
                    if (loadingDiv) {
                      loadingDiv.style.opacity = '0';
                    }
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Loading placeholder */}
                <div class="loading-overlay absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <div class="text-center">
                    <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p class="text-white text-sm">Loading...</p>
                  </div>
                </div>

                {/* Main overlay with title */}
                <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center pointer-events-none">
                  <span class="text-white text-lg font-bold drop-shadow-lg">{project.title}</span>
                </div>

                {/* Interactive overlay with links */}
                {hoveredProject === project.id && (
                  <div class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center space-x-4 transition-opacity duration-300 z-10">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer z-20"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer z-20"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code
                      </a>
                    )}
                  </div>
                )}

                {/* Fallback for broken images */}
                <div class="fallback-overlay absolute inset-0 opacity-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 transition-opacity duration-300">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span class="text-gray-600 text-2xl">📷</span>
                    </div>
                    <p class="text-white font-medium">{project.title}</p>
                    <p class="text-gray-200 text-sm">Image not available</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span class="text-xs font-medium text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div class="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
