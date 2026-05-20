"use client";

import Navbar from "../components/Navbar";
import { tulisan } from "../data/tulisan";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Library() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");

  // AMBIL SEMUA GENRE
  const genres = useMemo(() => {
    const allGenres = tulisan.map((item) => item.genre);
    return ["all", ...new Set(allGenres)];
  }, []);

  // FILTER LOGIC
  const filtered = tulisan.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ? true : item.status === statusFilter;

    const matchGenre =
      genreFilter === "all" ? true : item.genre === genreFilter;

    return matchSearch && matchStatus && matchGenre;
  });

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C6A15B]/5 blur-3xl rounded-full" />

      <div className="container max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#C6A15B] tracking-tight">
              Digital Collection
            </h1>

            <p className="mt-5 text-neutral-400 max-w-2xl leading-relaxed">
              Jelajahi kumpulan cerita, pemikiran, filsafat, refleksi, dan
              serpihan manusia dalam perpustakaan digital Noctivara.
            </p>
          </div>

          {/* SEARCH */}
          <div className="w-full lg:w-[320px]">
            <input
              type="text"
              placeholder="Cari buku..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-[#111827]/80
                border border-white/10
                px-5 py-3
                rounded-2xl
                text-sm
                text-white
                placeholder-neutral-500
                focus:outline-none
                focus:border-[#C6A15B]
                transition-all
              "
            />
          </div>
        </div>

        {/* FILTER */}
        <div className="flex flex-col gap-6 mb-16">
          {/* STATUS */}
          <div className="flex flex-wrap gap-3">
            {["all", "ready", "ongoing"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`
                  px-5 py-2 rounded-full text-sm border transition-all duration-300
                  ${
                    statusFilter === status
                      ? "bg-[#C6A15B] text-black border-[#C6A15B]"
                      : "border-white/10 text-neutral-400 hover:text-white hover:border-white/20"
                  }
                `}
              >
                {status === "all"
                  ? "Semua"
                  : status === "ready"
                    ? "Ready"
                    : "Ongoing"}
              </button>
            ))}
          </div>

          {/* GENRE */}
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setGenreFilter(genre)}
                className={`
                  px-4 py-2 rounded-full text-xs border transition-all duration-300
                  ${
                    genreFilter === genre
                      ? "bg-white text-black border-white"
                      : "border-white/10 text-neutral-500 hover:text-white hover:border-white/20"
                  }
                `}
              >
                {genre === "all" ? "Semua Genre" : genre}
              </button>
            ))}
          </div>
        </div>

        {/* GRID BOOKS */}
        {/* ORIGINAL COLLECTION */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C6A15B]">
                Noctivara Originals
              </p>

              <h2 className="mt-2 text-3xl font-bold">Original Collection</h2>
            </div>

            <span className="text-sm text-neutral-500">
              Karya original & refleksi personal
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
            {filtered
              .filter((item) => item.type === "original")
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/read/${item.slug}/${item.chapters[0].slug}`}
                >
                  <div
                    className="
              group relative overflow-hidden
              rounded-2xl border border-white/10
              bg-[#121217]
              hover:border-[#C6A15B]/40
              transition-all duration-500
              hover:-translate-y-1
            "
                  >
                    {/* COVER */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.cover}
                        alt={item.title}
                        loading="lazy"
                        className=" w-full aspect-[3/3.5] object-cover transition-transform duration-700 group-hover:scale-105 "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* BADGES */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                        <span
                          className="
                            px-3 py-1.5
                            rounded-full
                            text-[10px]
                            uppercase tracking-[0.2em]
                            bg-[#C6A15B]/90
                            text-black
                            font-semibold
                            backdrop-blur-md
                            shadow-[0_0_20px_rgba(198,161,91,0.25)]
                            border border-[#E7C98A]/30
                          "
                        >
                          ✦ Original
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-medium ${
                            item.status === "ready"
                              ? "
                              bg-emerald-400/90
                              text-black
                              border border-emerald-200/30
                              shadow-[0_0_20px_rgba(16,185,129,0.25)]
                              backdrop-blur-md
                              "
                              : "
                              bg-amber-300/90
                              text-black
                              border border-amber-100/30
                              shadow-[0_0_20px_rgba(251,191,36,0.25)]
                              backdrop-blur-md
                              "
                          }`}
                        >
                          {item.status === "ready" ? "Ready" : "Ongoing"}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-3">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#C6A15B]">
                        {item.genre}
                      </p>

                      <h2 className="mt-3 text-sm md:text-base font-semibold leading-snug group-hover:text-[#C6A15B] transition-all">
                        {item.title}
                      </h2>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs text-neutral-500"></span>

                        <span className="text-xs text-white group-hover:text-white transition-all">
                          Read Chapters →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* ARCHIVE LIBRARY */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
                Digital Archive
              </p>

              <h2 className="mt-2 text-3xl font-bold">Archive Library</h2>
            </div>

            <span className="text-sm text-neutral-500">
              Buku & pustaka digital
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {filtered
              .filter((item) => item.type === "archieve")
              .map((item) => (
                <a key={item.id} href={item.pdf} target="_blank">
                  <div
                    className="
              group rounded-2xl
              border border-white/10
              bg-[#121217]/70
              overflow-hidden
              hover:border-white/20
              transition-all duration-500
              hover:-translate-y-1
            "
                  >
                    {/* COVER */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="
                  w-full aspect-[3/4]
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded-full text-[10px] bg-white text-black">
                          Archive
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        {item.genre}
                      </p>

                      <h2 className="mt-3 text-sm font-semibold leading-snug group-hover:text-[#C6A15B] transition-all">
                        {item.title}
                      </h2>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[10px] text-neutral-500">
                          PDF Reader
                        </span>

                        <span className="text-xs text-neutral-300">Open →</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
