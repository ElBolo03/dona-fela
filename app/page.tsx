"use client";

import { useState } from "react";

const whatsapp = "54102549";

const productos = [
{
nombre: "Bicicleta Infantil 20",
categoria: "Bicicletas",
precio: "latex___",
descripcion: "Bicicleta infantil con accesorios.", emoji: "🚲", }, { nombre: "Lavadora Automática Samsung 9 kg", categoria: "Lavadoras", precio: "___",
descripcion: "Lavadora automática Samsung de 9 kg.",
emoji: "🧺",
},
{
nombre: "Televisor",
categoria: "Televisores",
precio: "latex___",
descripcion: "Televisor disponible. Pregunta por modelos.", emoji: "📺", }, { nombre: "Olla Arrocera 2.2 L", categoria: "Electrodomésticos", precio: "___",
descripcion: "Olla arrocera All Novu de 2.2 litros.",
emoji: "🍚",
},
{
nombre: "Fogón de Gas 1 Hornilla",
categoria: "Electrodomésticos",
precio: "$`___",
descripcion: "Fogón de gas de una hornilla con magneto.",
emoji: "🔥",
},
];

const categorias = [
"Todos",
"Bicicletas",
"Lavadoras",
"Televisores",
"Electrodomésticos",
];

export default function Home() {
const [categoria, setCategoria] = useState("Todos");

const productosFiltrados =
categoria === "Todos"
? productos
: productos.filter((producto) => producto.categoria === categoria);

const contactar = (producto: string) => {
const mensaje = `Hola, estoy interesado/a en ${producto}. ¿Me pueden dar más información?; window.open(https://wa.me/ {encodeURIComponent(mensaje)}`,
"_blank");
};

return (
<main className="min-h-screen bg-slate-50 text-slate-900">
{/* ENCABEZADO */}
<header className="bg-blue-700 text-white shadow-lg">
<div className="mx-auto max-w-6xl px-5 py-5">
<div className="flex items-center justify-between">
<div>
<h1 className="text-3xl font-extrabold tracking-tight">
DOÑA FELA
</h1>
<p className="text-blue-100">
Tu tienda de confianza
</p>
</div>

<a
href={https://wa.me/${whatsapp}`}
target="_blank"
rel="noopener noreferrer"
className="rounded-full bg-white px-4 py-2 font-bold text-blue-700 shadow hover:bg-blue-50"
>
WhatsApp
</a>
</div>
</div>
</header>

{/* BANNER */}
<section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
<div className="mx-auto max-w-6xl px-5 py-14">
<div className="max-w-2xl">
<p className="mb-2 font-semibold text-blue-100">
BIENVENIDOS A DOÑA FELA
</p>

<h2 className="text-4xl font-black leading-tight md:text-5xl">
Productos para tu hogar y toda la familia
</h2>

<p className="mt-4 text-lg text-blue-50">
Mira nuestro catálogo y escríbenos por WhatsApp para conocer
disponibilidad y precios.
</p>

<a
href="#productos"
className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-lg hover:bg-blue-50"
>
Ver productos
</a>
</div>
</div>
</section>

{/* CATEGORÍAS */}
<section className="mx-auto max-w-6xl px-5 py-8">
<h2 className="mb-4 text-2xl font-bold">Categorías</h2>

<div className="flex gap-3 overflow-x-auto pb-2">
{categorias.map((item) => (
<button
key={item}
onClick={() => setCategoria(item)}
className={whitespace-nowrap rounded-full px-5 py-2 font-semibold transition${
categoria === item
? "bg-blue-700 text-white"
: "bg-white text-blue-700 shadow hover:bg-blue-50"
}`}
>
{item}
</button>
))}
</div>
</section>

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
href={https://wa.me/${whatsapp}`}
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
href={https://wa.me/${whatsapp}`}
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-xl hover:bg-green-600"
aria-label="WhatsApp"
>
