import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import avatar from "../assets/avatar.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src={avatar}
                alt="Avatar Francis"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Bonjour, je suis Francis aka codeline401
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Développeur web passionné créant des expériences numériques innovantes
          et performantes avec React, JavaScript et les technologies modernes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Voir mes projets
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="border border-slate-400 px-8 py-4 rounded-lg font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
          >
            Me contacter
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
