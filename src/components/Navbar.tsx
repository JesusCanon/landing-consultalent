import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Consultalent"
              className="w-12 h-12 rounded-full"
            />

            <span className="text-2xl font-bold text-white">Consultalent</span>
          </a>

          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#problema" className="hover:text-white transition">
              Problema
            </a>

            <a href="#beneficios" className="hover:text-white transition">
              Beneficios
            </a>

            <a href="#formulario" className="hover:text-white transition">
              Participar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
