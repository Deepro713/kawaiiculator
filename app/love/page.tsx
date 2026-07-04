"use client";

import { useState } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("love")!;

// deterministic, order-independent "score" from two names — just for giggles ♡
function loveScore(a: string, b: string) {
  const names = [a, b]
    .map((s) => s.trim().toLowerCase().replace(/\s+/g, ""))
    .sort()
    .join("♡");
  let h = 0;
  for (let i = 0; i < names.length; i++) {
    h = (h * 31 + names.charCodeAt(i)) >>> 0;
  }
  return h % 101; // 0..100
}

function verdict(score: number) {
  if (score >= 90) return { emoji: "💞", text: "A match written in the stars!" };
  if (score >= 70) return { emoji: "💗", text: "Ooh, real sparks here~" };
  if (score >= 50) return { emoji: "💖", text: "Sweet potential, give it time!" };
  if (score >= 30) return { emoji: "💕", text: "A gentle, blooming friendship." };
  return { emoji: "🌸", text: "Better as adorable friends, maybe!" };
}

export default function LoveCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const calculate = () => {
    if (!a.trim() || !b.trim()) return;
    setScore(loveScore(a, b));
  };

  const v = score !== null ? verdict(score) : null;

  return (
    <CalcShell calc={calc}>
      <div className="row">
        <div className="field">
          <label>Your name</label>
          <input className="input" placeholder="Sakura" value={a}
            onChange={(e) => { setA(e.target.value); setScore(null); }} />
        </div>
        <div className="field">
          <label>Their name</label>
          <input className="input" placeholder="Haru" value={b}
            onChange={(e) => { setB(e.target.value); setScore(null); }} />
        </div>
      </div>

      <button type="button" className="btn" onClick={calculate}>
        ♡ Calculate our love ♡
      </button>

      {v && score !== null ? (
        <div className="result">
          <div className="label">{a} &amp; {b}</div>
          <div className="big">{score}%</div>
          <div className="sub" style={{ fontSize: "1.4rem" }}>{v.emoji}</div>
          <p className="hint" style={{ textAlign: "center", marginTop: 6 }}>
            Yumeko whispers: {v.text}
          </p>
        </div>
      ) : (
        <p className="hint" style={{ textAlign: "center", marginTop: 12 }}>
          just for fun — Yumeko&apos;s magic is 100% whimsy, 0% science ✦
        </p>
      )}
    </CalcShell>
  );
}
