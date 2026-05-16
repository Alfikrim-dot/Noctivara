"use client";

import Navbar from "./components/Navbar";
import { tulisan } from "./data/tulisan";

export default function Home() {
  const genres = ["Filsafat", "Psikologi", "Self Development", "Literatur"];
  const totalBooks = tulisan.length;
  const totalGenres = [...new Set(tulisan.map((book) => book.genre))].length;
  const ongoingBooks = tulisan.filter(
    (book) => book.status === "ongoing",
  ).length;

  const featuredBook = tulisan[0];

  return (
    <main className="min-h-screen overflow-hidden relative">
      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#C6A15B]/10 blur-3xl rounded-full top-[-120px] right-[-120px]" />

      <div className="absolute w-[400px] h-[400px] bg-blue-500/5 blur-3xl rounded-full bottom-[-100px] left-[-100px]" />

      {/* HERO */}
      <section className="container mx-auto grid md:grid-cols-2 items-center min-h-[90vh] px-6 gap-14 relative z-10">
        {/* LEFT CONTENT */}
        <div>
          {/* LABEL */}
          <span className="text-xs tracking-[0.3em] uppercase text-[#C6A15B]">
            Digital Literary Library
          </span>

          {/* TITLE */}
          <h1 className="mt-5 text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
            Noctivara
          </h1>

          {/* DESC */}
          <p className="mt-8 text-neutral-400 max-w-xl text-lg leading-relaxed">
            Perpustakaan digital untuk cerita, pemikiran, dan serpihan manusia
            yang tidak selalu utuh.
          </p>

          <p className="mt-4 text-neutral-500 max-w-lg leading-relaxed">
            Sebuah ruang sunyi tempat aksara, refleksi, filsafat, dan perjalanan
            batin disimpan.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/library"
              className="
                px-6 py-3 rounded-full
                bg-[#C6A15B]
                text-black text-sm font-medium
                hover:opacity-90
                transition-all duration-300
                shadow-lg shadow-[#C6A15B]/10
              "
            >
              Jelajahi Pustaka
            </a>

            <a
              href="/about"
              className="
                px-6 py-3 rounded-full
                border border-neutral-700
                text-sm text-neutral-300
                hover:border-neutral-500
                hover:bg-white/5
                transition-all duration-300
              "
            >
              Tentang Noctivara
            </a>
          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-14 text-sm">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {totalBooks}
              </h3>
              <p className="text-neutral-500 mt-1">Koleksi Buku</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                {totalGenres}
              </h3>
              <p className="text-neutral-500 mt-1">Genre</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                {ongoingBooks}
              </h3>
              <p className="text-neutral-500 mt-1">Ongoing Series</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:flex justify-center">
          {/* CARD FRAME */}
          <div
            className="
            relative
            w-[380px]
            h-[500px]
            rounded-[32px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            overflow-hidden
            shadow-2xl
          "
          >
            {/* IMAGE */}
            <img
              src={featuredBook.cover}
              alt={featuredBook.title}
              className=" w-full h-[85%] object-cover object-top opacity-90 "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />

            {/* FLOATING TEXT */}
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs tracking-[0.25em] uppercase text-[#C6A15B]">
                Featured Collection
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                {featuredBook.title}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
