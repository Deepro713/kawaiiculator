"use client";

import { useState } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("loan")!;

const money = (n: number) =>
  n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const P = parseFloat(amount) || 0;
  const annual = parseFloat(rate) || 0;
  const n = (parseFloat(years) || 0) * 12;
  const r = annual / 100 / 12;

  let monthly = 0;
  if (P > 0 && n > 0) {
    monthly = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
  }
  const totalPaid = monthly * n;
  const totalInterest = totalPaid - P;
  const has = monthly > 0 && Number.isFinite(monthly);

  return (
    <CalcShell calc={calc}>
      <div className="field">
        <label>Loan amount</label>
        <input className="input" inputMode="decimal" placeholder="10000"
          value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))} />
      </div>

      <div className="row">
        <div className="field">
          <label>Interest rate (% / yr)</label>
          <input className="input" inputMode="decimal" placeholder="6.5"
            value={rate} onChange={(e) => setRate(e.target.value.replace(/[^0-9.]/g, ""))} />
        </div>
        <div className="field">
          <label>Term (years)</label>
          <input className="input" inputMode="decimal" placeholder="5"
            value={years} onChange={(e) => setYears(e.target.value.replace(/[^0-9.]/g, ""))} />
        </div>
      </div>

      {has ? (
        <div className="result">
          <div className="label">Monthly payment</div>
          <div className="big">${money(monthly)}</div>
          <div className="stat-row">
            <div className="stat">
              <div className="v">${money(totalPaid)}</div>
              <div className="k">Total paid</div>
            </div>
            <div className="stat">
              <div className="v">${money(totalInterest)}</div>
              <div className="k">Interest</div>
            </div>
            <div className="stat">
              <div className="v">{n}</div>
              <div className="k">Payments</div>
            </div>
          </div>
        </div>
      ) : (
        <p className="hint" style={{ textAlign: "center", marginTop: 6 }}>
          Kuma is ready — enter an amount, rate &amp; term ♡
        </p>
      )}
    </CalcShell>
  );
}
