import Button from "../components/Button";

function CTASection() {
  return (
    <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
          Acceso Exclusivo BETA
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
          Sé de los primeros en probar Consultalent en tu Organización
        </h2>

        <p className="text-slate-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          En tan solo un par de días iniciaremos el envío de credenciales para nuestra versión BETA. Registra los datos de tu Organización y accede sin costo.
        </p>

        <div className="mt-8 flex justify-center">
          <Button text="Quiero mi acceso BETA gratuito" />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
