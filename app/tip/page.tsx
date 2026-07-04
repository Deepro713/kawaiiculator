"use client";

import { useState } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("tip")!;

const money = (n: number) =>
  n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(18);
  const [people, setPeople] = useState(2);

  const billNum = parseFloat(bill) || 0;
  const tipAmount = billNum * (tip / 100);
  const total = billNum + tipAmount;
  const perPerson = total / Math.max(1, people);

  const presets = [10, 15, 18, 20, 25];

  return (
    <CalcShell calc={calc}>
      <div className="field">
        <label>Bill amount</label>
        <input
          className="input"
          inputMode="decimal"
          placeholder="0.00"
          value={bill}
          onChange={(e) => setBill(e.target.value.replace(/[^0-9.]/g, ""))}
        />
      </div>

      <div className="field">
        <label>Tip — {tip}%</label>
        <input
          className="slider"
          type="range"
          min={0}
          max={30}
          step={1}
          value={tip}
          onChange={(e) => setTip(Number(e.target.value))}
        />
        <div className="row-3" style={{ marginTop: 12, gridTemplateColumns: "repeat(5,1fr)" }}>
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              className={`seg`}
              style={{
                justifyContent: "center",
                background: tip === p ? "var(--accent)" : "var(--bg-1)",
                color: tip === p ? "#fff" : "var(--accent-deep)",
                fontWeight: 800,
                border: "none",
                borderRadius: 14,
                padding: "10px 0",
              }}
              onClick={() => setTip(p)}
            >
              {p}%
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Splitting between</label>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            type="button"
            className="key fn"
            style={{ width: 54, padding: "12px 0" }}
            onClick={() => setPeople((p) => Math.max(1, p - 1))}
          >
            −
          </button>
          <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.6rem" }}>
            {people} {people === 1 ? "person" : "people"}
          </div>
          <button
            type="button"
            className="key op"
            style={{ width: 54, padding: "12px 0" }}
            onClick={() => setPeople((p) => Math.min(50, p + 1))}
          >
            +
          </button>
        </div>
      </div>

      <div className="result">
        <div className="label">Each person pays</div>
        <div className="big">${money(perPerson)}</div>
        <div className="stat-row">
          <div className="stat">
            <div className="v">${money(tipAmount)}</div>
            <div className="k">Tip</div>
          </div>
          <div className="stat">
            <div className="v">${money(total)}</div>
            <div className="k">Total</div>
          </div>
          <div className="stat">
            <div className="v">{people}</div>
            <div className="k">Split</div>
          </div>
        </div>
      </div>
    </CalcShell>
  );
}
