"use client";

import { useState } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("converter")!;

// factors are "how many base units in 1 of this unit"
const CATEGORIES = {
  Length: {
    base: "m",
    units: {
      mm: 0.001, cm: 0.01, m: 1, km: 1000,
      in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344,
    } as Record<string, number>,
  },
  Weight: {
    base: "g",
    units: { mg: 0.001, g: 1, kg: 1000, oz: 28.3495, lb: 453.592 } as Record<string, number>,
  },
  Temperature: {
    base: "°C",
    units: { "°C": 1, "°F": 1, K: 1 } as Record<string, number>, // handled specially
  },
} as const;

type Cat = keyof typeof CATEGORIES;

function toBaseTemp(v: number, unit: string) {
  if (unit === "°F") return (v - 32) * (5 / 9);
  if (unit === "K") return v - 273.15;
  return v; // °C
}
function fromBaseTemp(c: number, unit: string) {
  if (unit === "°F") return c * (9 / 5) + 32;
  if (unit === "K") return c + 273.15;
  return c;
}

const pretty = (n: number) => {
  if (!Number.isFinite(n)) return "—";
  const r = Math.round((n + Number.EPSILON) * 1e6) / 1e6;
  return r.toLocaleString(undefined, { maximumFractionDigits: 6 });
};

export default function ConverterCalculator() {
  const [cat, setCat] = useState<Cat>("Length");
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("ft");

  const unitList = Object.keys(CATEGORIES[cat].units);

  const changeCat = (c: Cat) => {
    setCat(c);
    const list = Object.keys(CATEGORIES[c].units);
    setFrom(list[0]);
    setTo(list[1] ?? list[0]);
  };

  const v = parseFloat(value);
  let result = NaN;
  if (Number.isFinite(v)) {
    if (cat === "Temperature") {
      result = fromBaseTemp(toBaseTemp(v, from), to);
    } else {
      const units = CATEGORIES[cat].units;
      result = (v * units[from]) / units[to];
    }
  }

  return (
    <CalcShell calc={calc}>
      <div className="field" style={{ display: "flex", justifyContent: "center" }}>
        <div className="seg">
          {(Object.keys(CATEGORIES) as Cat[]).map((c) => (
            <button key={c} className={cat === c ? "on" : ""} onClick={() => changeCat(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Value</label>
        <input
          className="input"
          inputMode="decimal"
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/[^0-9.\-]/g, ""))}
        />
      </div>

      <div className="row">
        <div className="field">
          <label>From</label>
          <select className="select" value={from} onChange={(e) => setFrom(e.target.value)}>
            {unitList.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>To</label>
          <select className="select" value={to} onChange={(e) => setTo(e.target.value)}>
            {unitList.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        className="pill-link"
        style={{ margin: "0 auto", display: "flex" }}
        onClick={() => { setFrom(to); setTo(from); }}
      >
        ⇅ swap
      </button>

      <div className="result">
        <div className="label">{pretty(v)} {from} equals</div>
        <div className="big">{pretty(result)}</div>
        <div className="sub">{to}</div>
      </div>
    </CalcShell>
  );
}
