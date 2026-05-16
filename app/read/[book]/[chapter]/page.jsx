"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { tulisan } from "../../../data/tulisan";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function ChapterPage() {
  const params = useParams();

  const { book, chapter } = params;

  const [content, setContent] = useState("");
  const [openChapters, setOpenChapters] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = tulisan.find((item) => item.slug === book);

  const currentChapterIndex = post?.chapters.findIndex(
    (item) => item.slug === chapter,
  );

  const prevChapter =
    currentChapterIndex > 0 ? post.chapters[currentChapterIndex - 1] : null;

  const nextChapter =
    currentChapterIndex < post.chapters.length - 1
      ? post.chapters[currentChapterIndex + 1]
      : null;

  // READING TIME
  const words = content.split(" ").length;
  const readingTime = Math.ceil(words / 180);

  // LOAD MARKDOWN
  useEffect(() => {
    async function loadContent() {
      const res = await fetch(`/content/${book}/${chapter}.md`);

      const text = await res.text();

      setContent(text);
    }

    loadContent();
  }, [book, chapter]);

  // SCROLL PROGRESS
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;

      const progress = (scroll / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return <div>Buku tidak ditemukan</div>;
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* PROGRESS BAR */}
      <div
        className="
          fixed top-0 left-0
          h-[3px]
          bg-gradient-to-r
          from-[#C6A15B]
          to-white
          z-50
          shadow-[0_0_20px_rgba(198,161,91,0.8)]
          transition-all duration-200
        "
        style={{ width: `${scrollProgress}%` }}
      />

      {/* FLOATING BACK */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/library"
          className="
            group
            flex items-center gap-3
            px-5 py-3

            rounded-2xl

            border border-white/10
            bg-white/[0.04]

            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(0,0,0,0.35)]

            hover:bg-white/[0.08]
            hover:border-[#C6A15B]/30

            transition-all duration-300
          "
        >
          {/* ICON */}
          <div
            className="
              w-8 h-8
              rounded-full

              flex items-center justify-center

              bg-[#C6A15B]/10
              text-[#C6A15B]

              group-hover:bg-[#C6A15B]
              group-hover:text-black

              transition-all duration-300
            "
          >
            ←
          </div>

          {/* TEXT */}
          <div className="flex flex-col leading-none">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Back
            </span>

            <span className="text-sm text-neutral-200 group-hover:text-white">
              Library
            </span>
          </div>
        </Link>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-0 left-1/2
            -translate-x-1/2
            w-[700px] h-[700px]
            bg-[#C6A15B]/10
            blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[500px] h-[500px]
            bg-blue-500/5
            blur-[120px]
            rounded-full
          "
        />
      </div>

      {/* CONTAINER */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* HEADER */}
        <div className="mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-[#C6A15B] mb-4">
            {post.genre || "Philosophy"}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-neutral-500">
            <span>
              Bab {currentChapterIndex + 1} / {post.chapters.length}
            </span>

            <span>•</span>

            <span>{readingTime} menit baca</span>
          </div>
        </div>

        {/* CHAPTER NAVIGATOR */}
        <div className="mb-14 sticky top-6 z-40">
          {/* TOGGLE */}
          <button
            onClick={() => setOpenChapters(!openChapters)}
            className="
              flex items-center gap-2
              px-5 py-3
              rounded-full
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              text-sm text-neutral-300
              hover:bg-white/5
              transition-all duration-300
              shadow-2xl
            "
          >
            ☰ Daftar Bab
          </button>

          {/* CHAPTER LIST */}
          {openChapters && (
          <div
            className="
              mt-4
              border border-white/10
              rounded-3xl
              bg-white/[0.03]
              backdrop-blur-2xl
              p-3
              shadow-2xl

              max-h-[220px]
              overflow-y-auto

              scrollbar-thin
              scrollbar-thumb-white/10
              scrollbar-track-transparent
            "
          >
              {post.chapters.map((item, index) => (
                <a
                  key={index}
                  href={`/read/${book}/${item.slug}`}
                  className={`
                    block px-5 py-4 rounded-2xl text-sm transition-all duration-300
                    ${
                      item.slug === chapter
                        ? "bg-[#C6A15B] text-black font-medium"
                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* ARTICLE */}
        <article
          className="
            prose
            prose-invert

            prose-headings:text-white
            prose-headings:font-semibold
            prose-headings:tracking-tight

            prose-h1:text-5xl
            prose-h1:mb-8

            prose-h2:text-3xl
            prose-h2:text-[#C6A15B]
            prose-h2:mt-16
            prose-h2:mb-8

            prose-p:text-neutral-300
            prose-p:leading-[2.1]
            prose-p:text-[18px]
            prose-p:tracking-[0.4px]
            prose-p:font-light

            [&_article>p:first-of-type:first-letter]:text-6xl
            [&_article>p:first-of-type:first-letter]:font-bold
            [&_article>p:first-of-type:first-letter]:mr-2
            [&_article>p:first-of-type:first-letter]:text-[#C6A15B]

            prose-strong:text-white
            prose-em:text-neutral-200

            prose-blockquote:border-[#C6A15B]
            prose-blockquote:text-neutral-400

            prose-hr:border-white/10

            max-w-none
          "
        >
          <ReactMarkdown
            components={{
              p: ({ children, ...props }) => {
                const text = children?.[0];

                const isFirstParagraph =
                  typeof text === "string" &&
                  text.length > 0 &&
                  content.indexOf(text) < 150;

                return (
                  <p
                    {...props}
                    className={`
                      leading-[2.1]
                      tracking-[0.4px]
                      text-[18px]
                      text-neutral-300
                      font-light
                      ${isFirstParagraph ? "first-paragraph" : ""}
                    `}
                  >
                    {children}
                  </p>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* NAVIGATION */}
        <div className="mt-24 flex justify-between items-center gap-4 border-t border-white/10 pt-10">
          {/* PREVIOUS */}
          {prevChapter ? (
            <a
              href={`/read/${book}/${prevChapter.slug}`}
              className="
                px-5 py-3 rounded-full
                border border-white/10
                bg-white/[0.02]
                text-sm text-neutral-300
                hover:bg-white/5
                transition-all duration-300
              "
            >
              ← {prevChapter.title}
            </a>
          ) : (
            <div />
          )}

          {/* NEXT */}
          {nextChapter ? (
            <a
              href={`/read/${book}/${nextChapter.slug}`}
              className="
                px-5 py-3 rounded-full
                bg-[#C6A15B]
                text-black text-sm font-medium
                hover:opacity-90
                transition-all duration-300
                shadow-[0_0_30px_rgba(198,161,91,0.25)]
              "
            >
              {nextChapter.title} →
            </a>
          ) : (
            <Link
              href={`/complete/${book}`}
              className="
                px-6 py-3 rounded-full
                bg-[#C6A15B]
                text-black text-sm font-medium
                hover:opacity-90
                transition-all duration-300
              "
            >
              Selesaikan Perjalanan →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
