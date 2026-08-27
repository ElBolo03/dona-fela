{/* PRODUCTOS */}
      <section id="productos" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Nuestros productos</h2>
          <span className="text-sm text-slate-500">
            {productosFiltrados.length} productos
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productosFiltrados.map((producto) => (
            <article
              key={producto.nombre}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-48 items-center justify-center bg-blue-50 text-7xl">
                {producto.emoji}
              </div>

              <div className="p-5">
                <span className="text-sm font-semibold text-blue-600">
                  {producto.categoria}
                </span>

                <h3 className="mt-1 text-xl font-bold">
                  {producto.nombre}
                </h3>

                <p className="mt-2 text-slate-600">
                  {producto.descripcion}
                </p>

                <p className="mt-4 text-2xl font-black text-blue-700">
                  {producto.precio}
                </p>

                <button
                  onClick={() => contactar(producto.nombre)}
                  className="mt-4 w-full rounded-xl bg-green-500 px-4 py-3 font-bold text-white transition hover:bg-green-600"
                >
                  💬 Consultar por WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <footer className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center">
          <h2 className="text-2xl font-bold">DOÑA FELA</h2>

          <p className="mt-2 text-blue-200">
            ¿Te interesa algún producto? Escríbenos.
          </p>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-xl bg-green-500 px-6 py-3 font-bold hover:bg-green-600"
          >
            💬 Escribir por WhatsApp
          </a>

          <p className="mt-6 text-sm text-blue-300">
            © 2026 Doña Fela. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-xl hover:bg-green-600"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </main>
  );
}
