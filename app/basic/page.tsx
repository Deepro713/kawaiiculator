"use client";

import { useState, useCallback, useEffect } from "react";
import CalcShell from "../components/CalcShell";
import { getCalculator } from "@/lib/calculators";

const calc = getCalculator("basic")!;

const roundish = (n: number) =>
  Math.round((n + Number.EPSILON) * 1e10) / 1e10;

export default function BasicCalculator() {
  const [current, setCurrent] = useState("0");
  const [stored, setStored] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [expr, setExpr] = useState("");
  const [fresh, setFresh] = useState(true); // next digit starts a new number

  const inputDigit = useCallback(
    (d: string) => {
      setCurrent((c) => {
        if (fresh) return d;
        if (c === "0") return d;
        if (c.replace(/[^0-9]/g, "").length >= 12) return c;
        return c + d;
      });
      setFresh(false);
    },
    [fresh]
  );

  const inputDot = useCallback(() => {
    setCurrent((c) => (fresh ? "0." : c.includes(".") ? c : c + "."));
    setFresh(false);
  }, [fresh]);

  const clearAll = useCallback(() => {
    setCurrent("0");
    setStored(null);
    setOp(null);
    setExpr("");
    setFresh(true);
  }, []);

  const toggleSign = useCallback(() => {
    setCurrent((c) => (c.startsWith("-") ? c.slice(1) : c === "0" ? c : "-" + c));
  }, []);

  const percent = useCallback(() => {
    setCurrent((c) => String(roundish(parseFloat(c) / 100)));
  }, []);

  const compute = (a: number, b: number, o: string) => {
    switch (o) {
      case "+": return a + b;
      case "−": return a - b;
      case "×": return a * b;
      case "÷": return b === 0 ? NaN : a / b;
      default: return b;
    }
  };

  const chooseOp = useCallback(
    (o: string) => {
      const val = parseFloat(current);
      if (stored !== null && op && !fresh) {
        const result = roundish(compute(stored, val, op));
        setStored(result);
        setCurrent(String(result));
        setExpr(`${result} ${o}`);
      } else {
        setStored(val);
        setExpr(`${val} ${o}`);
      }
      setOp(o);
      setFresh(true);
    },
    [current, stored, op, fresh]
  );

  const equals = useCallback(() => {
    if (op === null || stored === null) return;
    const val = parseFloat(current);
    const result = roundish(compute(stored, val, op));
    setExpr(`${stored} ${op} ${val} =`);
    setCurrent(Number.isNaN(result) ? "nyaa~ can't ÷0" : String(result));
    setStored(null);
    setOp(null);
    setFresh(true);
  }, [op, stored, current]);

  // keyboard support ♡
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key;
      if (/[0-9]/.test(k)) inputDigit(k);
      else if (k === ".") inputDot();
      else if (k === "+") chooseOp("+");
      else if (k === "-") chooseOp("−");
      else if (k === "*") chooseOp("×");
      else if (k === "/") { e.preventDefault(); chooseOp("÷"); }
      else if (k === "Enter" || k === "=") { e.preventDefault(); equals(); }
      else if (k === "Escape") clearAll();
      else if (k === "%") percent();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inputDigit, inputDot, chooseOp, equals, clearAll, percent]);

  const Key = ({
    children,
    onClick,
    cls = "",
  }: {
    children: React.ReactNode;
    onClick: () => void;
    cls?: string;
  }) => (
    <button className={`key ${cls}`} onClick={onClick} type="button">
      {children}
    </button>
  );

  return (
    <CalcShell calc={calc}>
      <div className="calc-display">
        <div className="expr">{expr || " "}</div>
        <div className="now">{current}</div>
      </div>

      <div className="keypad">
        <Key cls="fn" onClick={clearAll}>AC</Key>
        <Key cls="fn" onClick={toggleSign}>±</Key>
        <Key cls="fn" onClick={percent}>%</Key>
        <Key cls="op" onClick={() => chooseOp("÷")}>÷</Key>

        <Key onClick={() => inputDigit("7")}>7</Key>
        <Key onClick={() => inputDigit("8")}>8</Key>
        <Key onClick={() => inputDigit("9")}>9</Key>
        <Key cls="op" onClick={() => chooseOp("×")}>×</Key>

        <Key onClick={() => inputDigit("4")}>4</Key>
        <Key onClick={() => inputDigit("5")}>5</Key>
        <Key onClick={() => inputDigit("6")}>6</Key>
        <Key cls="op" onClick={() => chooseOp("−")}>−</Key>

        <Key onClick={() => inputDigit("1")}>1</Key>
        <Key onClick={() => inputDigit("2")}>2</Key>
        <Key onClick={() => inputDigit("3")}>3</Key>
        <Key cls="op" onClick={() => chooseOp("+")}>+</Key>

        <Key cls="span2" onClick={() => inputDigit("0")}>0</Key>
        <Key onClick={inputDot}>.</Key>
        <Key cls="eq" onClick={equals}>=</Key>
      </div>

      <p className="hint">✦ tip: you can use your keyboard too!</p>
    </CalcShell>
  );
}
