"use client";

import { useState } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("percentage")!;

type Mode = "of" | "is" | "change";

const fmt = (n: number) =>
  Number.isFinite(n)
    ? Math.round((n + Number.EPSILON) * 1e4) / 1e4
    : "—";

export default function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("of");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const x = parseFloat(a);
  const y = parseFloat(b);
  const ready = Number.isFinite(x) && Number.isFinite(y);

  let result: number = NaN;
  let label = "";
  let big = "";
  if (ready) {
    if (mode === "of") {
      result = (x / 100) * y;
      label = `${fmt(x)}% of ${fmt(y)} is`;
      big = `${fmt(result)}`;
    } else if (mode === "is") {
      result = (x / y) * 100;
      label = `${fmt(x)} is this % of ${fmt(y)}`;
      big = `${fmt(result)}%`;
    } else {
      result = ((y - x) / x) * 100;
      label = `change from ${fmt(x)} to ${fmt(y)}`;
      big = `${result >= 0 ? "+" : ""}${fmt(result)}%`;
    }
  }

  const labels: Record<Mode, [string, string]> = {
    of: ["Percent (%)", "of number"],
    is: ["Number", "out of"],
    change: ["From", "To"],
  };

  return (
    <CalcShell calc={calc}>
      <div className="field" style={{ display: "flex", justifyContent: "center" }}>
        <div className="seg">
          <button className={mode === "of" ? "on" : ""} onClick={() => setMode("of")}>% of</button>
          <button className={mode === "is" ? "on" : ""} onClick={() => setMode("is")}>is what %</button>
          <button className={mode === "change" ? "on" : ""} onClick={() => setMode("change")}>% change</button>
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>{labels[mode][0]}</label>
          <input className="input" inputMode="decimal" value={a}
            onChange={(e) => setA(e.target.value.replace(/[^0-9.\-]/g, ""))} />
        </div>
        <div className="field">
          <label>{labels[mode][1]}</label>
          <input className="input" inputMode="decimal" value={b}
            onChange={(e) => setB(e.target.value.replace(/[^0-9.\-]/g, ""))} />
        </div>
      </div>

      {ready && Number.isFinite(result) ? (
        <div className="result">
          <div className="label">{label}</div>
          <div className="big">{big}</div>
        </div>
      ) : (
        <p className="hint" style={{ textAlign: "center", marginTop: 6 }}>
          Pomu says: pop in two numbers and watch the magic~ ♡
        </p>
      )}
    </CalcShell>
  );
}
