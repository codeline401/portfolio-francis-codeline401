export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            À propos de moi
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-slate-700">
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Je suis un développeur web full-stack passionné par la création
              d'interfaces utilisateur modernes et intuitives. Avec une solide
              expérience en React, JavaScript et les technologies du web, je
              m'efforce de transformer les idées en solutions numériques
              concrètes.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Mon approche combine rigueur technique et créativité pour livrer
              des produits performants, accessibles et centrés sur
              l'utilisateur.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                � Formation
              </h3>
              <p className="text-slate-300">
                Master en Mathématiques & Informatique Appliqués avec une
                spécialisation en développement et technologies numériques.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                💼 Expérience
              </h3>
              <p className="text-slate-300">
                Expérience confirmée en support applicatif m'ayant permis de
                développer une expertise en gestion de projets et résolution de
                problèmes complexes.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                💡 Philosophie
              </h3>
              <p className="text-slate-300">
                Code propre, performances optimisées, et une excellente
                expérience utilisateur sont mes priorités absolues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
