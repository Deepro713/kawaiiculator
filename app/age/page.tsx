"use client";

import { useState } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("age")!;

function diff(birth: Date, today: Date) {
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor((today.getTime() - birth.getTime()) / 86400000);

  // next birthday
  let next = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (next.getTime() < today.getTime()) {
    next = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
  }
  const daysToBirthday = Math.ceil((next.getTime() - today.getTime()) / 86400000);

  return { years, months, days, totalDays, daysToBirthday };
}

export default function AgeCalculator() {
  const [dob, setDob] = useState("");

  let res: ReturnType<typeof diff> | null = null;
  if (dob) {
    const birth = new Date(dob + "T00:00:00");
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (!Number.isNaN(birth.getTime()) && birth.getTime() <= today.getTime()) {
      res = diff(birth, today);
    }
  }

  return (
    <CalcShell calc={calc}>
      <div className="field">
        <label>Your birthday</label>
        <input
          className="input"
          type="date"
          value={dob}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      {res ? (
        <div className="result">
          <div className="label">You are</div>
          <div className="big">{res.years}</div>
          <div className="sub">
            years, {res.months} months &amp; {res.days} days young
          </div>
          <div className="stat-row">
            <div className="stat">
              <div className="v">{res.totalDays.toLocaleString()}</div>
              <div className="k">Days alive</div>
            </div>
            <div className="stat">
              <div className="v">{res.daysToBirthday}</div>
              <div className="k">Days to 🎂</div>
            </div>
            <div className="stat">
              <div className="v">{(res.years * 12 + res.months).toLocaleString()}</div>
              <div className="k">Months</div>
            </div>
          </div>
          <p className="hint" style={{ textAlign: "center", marginTop: 10 }}>
            {res.daysToBirthday === 0
              ? "Dango says: HAPPY BIRTHDAY!! 🎉🎂"
              : `Dango is already counting down to your next cake~`}
          </p>
        </div>
      ) : (
        <p className="hint" style={{ textAlign: "center", marginTop: 6 }}>
          pick your birthday and I&apos;ll count every adorable day ♡
        </p>
      )}
    </CalcShell>
  );
}
