import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">VCALLDEAL</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-red-500">Inicio</a>
          <a href="#" className="hover:text-red-500">Buscar Autos</a>
          <a href="#" className="hover:text-red-500">Cómo Funciona</a>
          <a href="#" className="hover:text-red-500">Contacto</a>
        </nav>
      </header>
      <section className="h-[80vh] bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1605559424843-d289e6b40c4e?auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <h2 className="text-4xl font-bold mb-4">El auto que tú quieres, sin discutir con vendedores.</h2>
            <p className="text-lg mb-6">Más de 1,000 autos disponibles. Tú solo dinos el presupuesto.</p>
            <div className="space-x-4">
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Buscar Mi Auto</a>
              <a href="https://wa.me/12393797699" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white text-center py-4 mt-10">
        <p>📞 +1 (239) 379-7699 | ✉️ infovcall@gmail.com</p>
        <p>© 2025 VCALLDEAL – Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
