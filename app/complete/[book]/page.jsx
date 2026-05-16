"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { tulisan } from "../../data/tulisan";

export default function CompletePage() {
  const params = useParams();

  const { book } = params;

  const post = tulisan.find((item) => item.slug === book);

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Buku tidak ditemukan.
      </main>
    );
  }
   return (
    <main className="min-h-screen bg-[#070707] text-white overflow-hidden relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,161,91,0.12),transparent_60%)]" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')]" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT */}
          <div>
            <p className="text-[#C6A15B] tracking-[0.3em] uppercase text-xs mb-6">
              Completion Experience
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Terima kasih telah membaca.
            </h1>

            <p className="text-neutral-400 text-lg leading-[2] max-w-xl mb-8">
              Tidak semua fragmen harus utuh untuk tetap memiliki makna.
              Dan kini, satu perjalanan telah selesai.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="border border-white/10 rounded-full px-5 py-3 text-sm text-neutral-300">
                ✓ {post.chapters?.length || 0} Bagian selesai dibaca
              </div>

              <div className="border border-white/10 rounded-full px-5 py-3 text-sm text-neutral-300">
                ✓ Status: {post.status}
              </div>

              <div className="border border-white/10 rounded-full px-5 py-3 text-sm text-neutral-300">
                ✓ Noctivara Edition
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              {/* DOWNLOAD */}
              {post.pdf && (
                <a
                  href={post.pdf}
                  target="_blank"
                  className="px-7 py-4 bg-[#C6A15B] text-black rounded-full font-medium hover:scale-[1.02] transition-all duration-300"
                >
                  Unduh Edisi Lengkap
                </a>
              )}

              {/* LIBRARY */}
              <Link
                href="/library"
                className="px-7 py-4 border border-white/10 rounded-full text-neutral-300 hover:bg-white/5 transition-all duration-300"
              >
                Jelajahi Buku Lain
                    </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div className="absolute w-[420px] h-[420px] bg-[#C6A15B]/20 blur-[120px] rounded-full" />

            {/* BOOK MOCKUP */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black/40 blur-2xl scale-95" />

              <img
                src={post.cover}
                alt={post.title}
                className="
                  relative
                  w-[320px]
                  rounded-2xl
                  shadow-2xl
                  border border-white/10
                  rotate-[-4deg]
                  group-hover:rotate-0
                  transition-all duration-500
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <div className="relative z-10 pb-24 px-6 text-center max-w-3xl mx-auto">
        <p className="text-2xl md:text-3xl leading-relaxed text-neutral-300 italic">
          “Beberapa perjalanan tidak mengubah dunia.
          Tetapi diam-diam mengubah cara kita memandang diri sendiri.”
        </p>
      </div>
    </main>
  );
}