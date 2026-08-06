import Button from "../components/Button";
import {
  Sparkles,
  Users,
  BrainCircuit,
  BarChart3,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function HeroSection() {
  return (
    <section className="bg-slate-950 text-white min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/40 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-blue-300 backdrop-blur-md shadow-lg shadow-blue-500/10">
          <Sparkles size={16} className="text-blue-400 animate-pulse" />
          <span>🚀 ¡Próximo Lanzamiento BETA de la plataforma Consultalent!</span>
        </div>

        {/* Título */}
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight max-w-5xl">
          Transforma la atracción, selección y{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
            retención de talento en tu Organización
          </span>
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl leading-relaxed">
          Recluta el talento necesario para cubrir tus vacantes, centraliza procesos de selección, agiliza revisiones con nuestro{" "}
          <strong className="text-white font-semibold">Match de IA</strong>, mide la satisfacción laboral con encuestas periódicas y comprende los motivos de retiro para reducir la rotación de tu personal.
        </p>

        {/* Botones */}
        <div className="mt-10 flex gap-4 flex-wrap items-center">
          <Button text="Obtener acceso a la versión BETA" />

          <a
            href="#beneficios"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-xl transition duration-200 font-medium"
          >
            <span>Descubrir lo que podemos lograr</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Banner informativo BETA */}
        <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <ShieldCheck size={18} className="text-emerald-400 flex-shrink-0" />
          <span>Registra tu Organización hoy para recibir credenciales de acceso gratuito en cuanto esté disponible en un par de días.</span>
        </div>

        {/* Tarjetas de características clave */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-lg text-white">Atracción de candidatos</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Atrae candidatos calificados a tus vacantes activas en tiempo récord.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <BrainCircuit size={24} />
            </div>
            <h3 className="font-bold text-lg text-white">Match con IA</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Estudia en segundos la compatibilidad de la vacante contra el candidato.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
              <BarChart3 size={24} />
            </div>
            <h3 className="font-bold text-lg text-white">Disminución de rotación</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Encuestas de satisfacción y de motivos de retiro para aplicar mejoras.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <HeartHandshake size={24} />
            </div>
            <h3 className="font-bold text-lg text-white">Servicios Consultalent</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Respaldo y acompañamiento humano especializado para tu equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
