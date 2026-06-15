import Button from "../components/Button";

function HeroSection() {
  return (
    <section className="bg-slate-900 text-white min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <span
          className="
        bg-blue-600
        px-4
        py-2
        rounded-full
        text-sm
        "
        >
          Acceso anticipado
        </span>

        <h1
          className="
        mt-8
        text-4xl
        md:text-6xl
        lg:text-7xl
        font-bold
        leading-tight
        max-w-4xl
        "
        >
          Contratar talento no debería ser un proceso desorganizado.
        </h1>

        <p
          className="
        mt-8
        text-lg
        md:text-xl
        text-gray-300
        max-w-3xl
        "
        >
          En Consultalent estamos validando una solución para ayudar a pequeñas
          y medianas empresas a gestionar sus procesos de reclutamiento de
          manera más organizada y eficiente.
        </p>

        <div className="mt-12 flex gap-4 flex-wrap">
          <Button text="Quiero participar" />

          <a
            href="#problema"
            className="
            border
            border-gray-500
            px-8
            py-4
            rounded-xl
            hover:bg-slate-800
            transition
            "
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
