import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[450px] h-[450px] bg-[#C6A15B]/10 blur-3xl rounded-full top-[-120px] right-[-100px]" />

      <div className="absolute w-[350px] h-[350px] bg-blue-500/5 blur-3xl rounded-full bottom-[-100px] left-[-100px]" />

      {/* CONTENT */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-28">

        {/* LABEL */}
        <span className="text-xs tracking-[0.3em] uppercase text-[#C6A15B]">
          About Noctivara
        </span>

        {/* TITLE */}
        <h1 className="mt-5 text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Sebuah ruang
          <br />
          untuk aksara dan manusia.
        </h1>

        {/* QUOTE */}
        <div className="mt-12 border-l border-[#C6A15B]/40 pl-6">
          <p className="text-neutral-400 italic leading-relaxed text-lg">
            “ Tidak semua yang ditulis berasal dari jawaban —
            sebagian besar hanyalah bentuk bertahan. ”
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-16 space-y-8 text-neutral-300 leading-[2] text-lg">

          <p>
            <span className="text-white font-medium">
              Noctivara
            </span>{" "}
            adalah perpustakaan digital yang lahir dari serpihan
            pemikiran, cerita, dan perjalanan batin manusia.
          </p>

          <p>
            Tempat di mana tulisan tidak selalu harus sempurna,
            tidak selalu selesai, dan tidak selalu memiliki jawaban.
            Karena terkadang, memahami hidup dimulai dari keberanian
            untuk mengakui bahwa kita pun pernah retak.
          </p>

          <p>
            Di dalamnya terdapat berbagai karya —
            mulai dari refleksi filosofis, psikologi manusia,
            cerita eksistensial, hingga tulisan yang lahir
            dari malam-malam panjang dan dialog dengan diri sendiri.
          </p>

          <p>
            Noctivara bukan sekadar tempat membaca.
            Ia adalah ruang sunyi bagi mereka yang pernah merasa hilang,
            terlalu banyak berpikir, atau sedang mencoba merangkai ulang dirinya.
          </p>

        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-5 mt-20">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
            <h3 className="text-xl font-semibold">
              Filosofi
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Tulisan sebagai ruang memahami, bukan sekadar menjawab.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
            <h3 className="text-xl font-semibold">
              Perjalanan
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Karya yang tumbuh bersama proses dan pengalaman hidup.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
            <h3 className="text-xl font-semibold">
              Eksplorasi
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Ruang untuk filsafat, psikologi, cerita, dan refleksi manusia.
            </p>
          </div>

        </div>

        {/* AUTHOR */}
        <div className="mt-24 pt-10 border-t border-white/10">

          <p className="text-sm tracking-[0.25em] uppercase text-[#C6A15B]">
            Founder
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Alfikria Ramdhan
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-400 leading-relaxed">
            Penulis, pengamat diri, dan seseorang yang percaya
            bahwa tidak semua manusia harus selalu terlihat kuat
            untuk tetap memiliki makna.
          </p>

        </div>

      </section>
    </main>
  );
}