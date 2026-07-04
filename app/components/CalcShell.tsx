import Link from "next/link";
import Pet from "./Pet";
import type { Calculator } from "@/lib/calculators";

export default function CalcShell({
  calc,
  children,
}: {
  calc: Calculator;
  children: React.ReactNode;
}) {
  return (
    <main className="page" data-accent={calc.accent}>
      <div className="topbar">
        <Link className="brand" href="/">
          <span className="logo-face">(｡◕‿◕｡)</span>
          Kawaiiculator
        </Link>
        <Link className="pill-link" href="/">
          ← all friends
        </Link>
      </div>

      <div className="calc-wrap">
        <div className="calc-head">
          <div className="pet-wrap">
            <Pet type={calc.pet} size={92} />
          </div>
          <div className="titles">
            <span className="badge-cat">{calc.domain}</span>
            <h1 style={{ marginTop: 6 }}>{calc.name} Calculator</h1>
            <div className="say">
              <span className="name">{calc.petName}</span>: “{calc.say}”
            </div>
          </div>
        </div>

        <div className="card">{children}</div>
      </div>

      <p className="foot">
        made with <span className="hearts">♡</span> &amp; a little{" "}
        {calc.petName} magic — Kawaiiculator
      </p>
    </main>
  );
}
