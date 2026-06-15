import Button from "../components/Button";
import { Building2, Users, ClipboardList, CircleCheck } from "lucide-react";

function HeroSection() {
  return (
    <section className="bg-slate-900 text-white min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge superior */}

        <span
          className="
            inline-flex
            items-center
            gap-2
            bg-blue-600
            px-5
            py-2
            rounded-full
            text-sm
            font-medium
          "
        >
          🚀 Validando una nueva solución para PYMES
        </span>

        {/* Título */}

        <h1
          className="
            mt-3
            text-4xl
            md:text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            max-w-5xl
          "
        >
          Reclutamiento y selección de personal para PYMES,
          <span className="text-blue-200">
            {" "}
            sin procesos desordenados ni hojas de Excel.
          </span>
        </h1>

        {/* Descripción */}

        <p
          className="
            mt-8
            text-lg
            md:text-xl
            text-gray-300
            max-w-4xl
            leading-9
          "
        >
          En Consultalent estamos construyendo una plataforma que permitirá
          organizar candidatos, realizar seguimiento y optimizar los procesos de
          contratación desde un solo lugar.
          <br />
          <br />
          Queremos validar esta solución junto a empresas como la tuya.
        </p>

        {/* Botones */}

        <div className="mt-12 flex gap-4 flex-wrap">
          <Button text="Participar en la validación" />

          <a
            href="#beneficios"
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

        {/* Características */}

        <div
          className="
            mt-20
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          <div className="flex items-start gap-4">
            <Building2 className="text-blue-400" />

            <div>
              <h3 className="font-semibold">Pensado para PYMES</h3>

              <p className="text-gray-400 mt-2">
                Diseñado para pequeñas y medianas empresas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="text-blue-400" />

            <div>
              <h3 className="font-semibold">Seguimiento de candidatos</h3>

              <p className="text-gray-400 mt-2">
                Mayor control durante todo el proceso.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ClipboardList className="text-blue-400" />

            <div>
              <h3 className="font-semibold">Procesos organizados</h3>

              <p className="text-gray-400 mt-2">
                Sin hojas de Excel ni información dispersa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CircleCheck className="text-blue-400" />

            <div>
              <h3 className="font-semibold">Implementación sencilla</h3>

              <p className="text-gray-400 mt-2">
                Fácil de adoptar por cualquier empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
