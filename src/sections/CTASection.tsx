import Button from "../components/Button";

function CTASection() {
  return (
    <section className="bg-slate-900 text-white py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold">
          Estamos construyendo Consultalent
        </h2>

        <p className="text-gray-300 mt-8 text-xl">
          Queremos conocer cómo gestionas actualmente tus procesos de
          reclutamiento y selección.
        </p>

        <Button text="Quiero participar" />
      </div>
    </section>
  );
}

export default CTASection;
