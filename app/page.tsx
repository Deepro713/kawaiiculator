import Link from "next/link";
import Pet from "./components/Pet";
import { calculators } from "@/lib/calculators";

export default function Home() {
  return (
    <main className="page" data-accent="pink">
      <div className="topbar">
        <span className="brand">
          <span className="logo-face">(｡◕‿◕｡)</span>
          Kawaiiculator
        </span>
        <a
          className="pill-link"
          href="https://github.com/Deepro713/kawaiiculator"
          target="_blank"
          rel="noreferrer"
        >
          ★ GitHub
        </a>
      </div>

      <section className="hero">
        <div className="kaomoji">₊˚⊹♡ ٩(｡•́‿•̀｡)۶ ♡⊹˚₊</div>
        <h1>
          Meet your <span className="grad">Kawaiiculator</span> friends
        </h1>
        <p>
          Eight little chibi pets, each an expert at their own kind of math.
          Pick a friend and let them crunch the numbers for you~
        </p>
      </section>

      <section className="grid">
        {calculators.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="tile"
            data-accent={c.accent}
          >
            <div className="pet-wrap">
              <Pet type={c.pet} size={88} />
            </div>
            <span className="tile-domain">{c.domain}</span>
            <h3>{c.name}</h3>
            <span className="pet-name">with {c.petName}</span>
            <p>{c.tagline}</p>
          </Link>
        ))}
      </section>

      <p className="foot">
        <span className="sparkle">✦</span> made with <span className="hearts">♡</span>{" "}
        using Next.js &amp; deployed on Vercel <span className="sparkle">✦</span>
      </p>
    </main>
  );
}
