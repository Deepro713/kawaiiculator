"use client";

import { useState } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("bmi")!;

type Unit = "metric" | "imperial";

function category(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", note: "eat a little more, cutie~", color: "#86c5f0" };
  if (bmi < 25) return { label: "Healthy", note: "looking hoppy & healthy! ♡", color: "#7fd8b6" };
  if (bmi < 30) return { label: "Overweight", note: "a gentle stroll never hurts~", color: "#ffb08a" };
  return { label: "Obese", note: "let's take care of you together", color: "#ff9a86" };
}

export default function BmiCalculator() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [cm, setCm] = useState("");
  const [kg, setKg] = useState("");
  const [ft, setFt] = useState("");
  const [inch, setInch] = useState("");
  const [lb, setLb] = useState("");

  let bmi = 0;
  if (unit === "metric") {
    const h = parseFloat(cm) / 100;
    const w = parseFloat(kg);
    if (h > 0 && w > 0) bmi = w / (h * h);
  } else {
    const totalIn = (parseFloat(ft) || 0) * 12 + (parseFloat(inch) || 0);
    const w = parseFloat(lb);
    if (totalIn > 0 && w > 0) bmi = (w / (totalIn * totalIn)) * 703;
  }

  const has = bmi > 0 && Number.isFinite(bmi);
  const cat = category(bmi);

  return (
    <CalcShell calc={calc}>
      <div className="field" style={{ display: "flex", justifyContent: "center" }}>
        <div className="seg">
          <button className={unit === "metric" ? "on" : ""} onClick={() => setUnit("metric")}>
            Metric
          </button>
          <button className={unit === "imperial" ? "on" : ""} onClick={() => setUnit("imperial")}>
            Imperial
          </button>
        </div>
      </div>

      {unit === "metric" ? (
        <div className="row">
          <div className="field">
            <label>Height (cm)</label>
            <input className="input" inputMode="decimal" placeholder="165"
              value={cm} onChange={(e) => setCm(e.target.value.replace(/[^0-9.]/g, ""))} />
          </div>
          <div className="field">
            <label>Weight (kg)</label>
            <input className="input" inputMode="decimal" placeholder="58"
              value={kg} onChange={(e) => setKg(e.target.value.replace(/[^0-9.]/g, ""))} />
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="field">
              <label>Height (ft)</label>
              <input className="input" inputMode="decimal" placeholder="5"
                value={ft} onChange={(e) => setFt(e.target.value.replace(/[^0-9.]/g, ""))} />
            </div>
            <div className="field">
              <label>Height (in)</label>
              <input className="input" inputMode="decimal" placeholder="5"
                value={inch} onChange={(e) => setInch(e.target.value.replace(/[^0-9.]/g, ""))} />
            </div>
          </div>
          <div className="field">
            <label>Weight (lb)</label>
            <input className="input" inputMode="decimal" placeholder="128"
              value={lb} onChange={(e) => setLb(e.target.value.replace(/[^0-9.]/g, ""))} />
          </div>
        </>
      )}

      {has ? (
        <div className="result">
          <div className="label">Your BMI</div>
          <div className="big" style={{ color: cat.color }}>{bmi.toFixed(1)}</div>
          <div className="sub" style={{ color: cat.color }}>{cat.label}</div>
          <p className="hint" style={{ textAlign: "center", marginTop: 8 }}>
            Momo says: {cat.note}
          </p>
        </div>
      ) : (
        <p className="hint" style={{ textAlign: "center", marginTop: 6 }}>
          fill in your height &amp; weight and I&apos;ll do the rest ♡
        </p>
      )}
    </CalcShell>
  );
}
