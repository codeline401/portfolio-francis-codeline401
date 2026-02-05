import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "🛒",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Application de gestion des tâches avec drag-and-drop et notifications en temps réel.",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "✅",
    link: "https://plateforme-rcr-project-management.vercel.app/",
    github:
      "https://github.com/codeline401/PLATEFORME-RCR-PROJECT-MANAGEMENT.git",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Tableau de bord météo interactif avec prévisions et cartes géographiques.",
    tags: ["React", "API REST", "Chart.js"],
    image: "🌤️",
    link: "https://country-weather-app-juut.vercel.app/",
    github: "https://github.com/codeline401/country-weather-app",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mes Projets
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="p-6">
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Voir</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
