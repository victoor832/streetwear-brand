"use client";

import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";

type Multiplier = 2.5 | 3 | 3.5;

export function CogCalculator() {
  const [blank, setBlank] = useState<string>("12");
  const [print, setPrint] = useState<string>("8");
  const [tags, setTags] = useState<string>("2.5");
  const [shipping, setShipping] = useState<string>("5");
  const [multiplier, setMultiplier] = useState<Multiplier>(3);

  const calc = useMemo(() => {
    const b = parseFloat(blank) || 0;
    const p = parseFloat(print) || 0;
    const t = parseFloat(tags) || 0;
    const s = parseFloat(shipping) || 0;
    const cog = b + p + t + s;
    const price = cog * multiplier;
    const margin = price > 0 ? ((price - cog) / price) * 100 : 0;
    const profitPerUnit = price - cog;
    return {
      cog: cog.toFixed(2).replace(".", ","),
      price: price.toFixed(2).replace(".", ","),
      margin: margin.toFixed(1).replace(".", ","),
      profit: profitPerUnit.toFixed(2).replace(".", ","),
    };
  }, [blank, print, tags, shipping, multiplier]);

  return (
    <div className="mt-6 border border-foreground bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 sm:px-6 py-3 bg-foreground text-background">
        <Calculator className="w-4 h-4" />
        <span className="font-mono text-xs tracking-widest uppercase">
          Calculadora de COG (Cost of Goods)
        </span>
        <span className="ml-auto font-mono text-[10px] opacity-70">
          Fase 5 / Tarea 5-4
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
        {/* Inputs */}
        <div className="bg-background p-5 sm:p-6 space-y-4">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            Costes por prenda (euros)
          </h4>

          <NumberInput
            label="Coste blank o producción"
            hint="Precio de la prenda base o fabricación"
            value={blank}
            onChange={setBlank}
          />
          <NumberInput
            label="Coste impresión o bordado"
            hint="Personalización: serigrafía, DTG, bordado"
            value={print}
            onChange={setPrint}
          />
          <NumberInput
            label="Etiquetas y packaging"
            hint="Hangtag, bolsa, etiqueta interior"
            value={tags}
            onChange={setTags}
          />
          <NumberInput
            label="Envío al cliente"
            hint="Coste medio de envío nacional"
            value={shipping}
            onChange={setShipping}
          />

          {/* Multiplier selector */}
          <div className="pt-2">
            <label className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-2">
              Multiplicador deseado (precio venta = COG × mult.)
            </label>
            <div className="flex gap-2">
              {([2.5, 3, 3.5] as Multiplier[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMultiplier(m)}
                  className={`flex-1 py-2 font-mono text-sm tabular-nums transition-colors ${
                    multiplier === m
                      ? "bg-foreground text-background"
                      : "border border-border text-foreground hover:border-foreground"
                  }`}
                  aria-pressed={multiplier === m}
                >
                  ×{m.toString().replace(".", ",")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="bg-muted/30 p-5 sm:p-6 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            Resultado
          </h4>

          <div className="space-y-3 flex-1">
            <OutputRow label="COG (coste por unidad)" value={`${calc.cog}€`} muted />
            <OutputRow
              label="Precio de venta sugerido"
              value={`${calc.price}€`}
              emphasized
            />
            <OutputRow
              label="Beneficio bruto por unidad"
              value={`${calc.profit}€`}
              muted
            />
            <OutputRow
              label="Margen bruto"
              value={`${calc.margin}%`}
              emphasized
            />
          </div>

          {/* Warning if margin too low */}
          {parseFloat(calc.margin) < 50 && (
            <div className="border border-foreground px-3 py-2">
              <p className="font-mono text-[10px] tracking-widest uppercase text-foreground">
                Aviso
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                Margen por debajo del 50%. Para una marca streetwear sostenible, busca mínimo
                55-65% de margen bruto. Sube el multiplicador o reduce costes.
              </p>
            </div>
          )}

          {/* Tip */}
          <div className="border-t border-border pt-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-mono uppercase tracking-wider text-foreground">
                Regla:
              </span>{" "}
              streetwear premium usa típicamente multiplicador 2,8 a 3,5. Por debajo de 2,5 es
              difícil sostener la marca a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberInput({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1">
        {label}
      </label>
      <div className="flex items-stretch border border-border focus-within:border-foreground transition-colors">
        <span className="px-3 flex items-center font-mono text-sm text-muted-foreground bg-muted/30 border-r border-border">
          €
        </span>
        <input
          type="number"
          inputMode="decimal"
          step="0.5"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 bg-transparent text-sm text-foreground focus:outline-none font-mono tabular-nums"
        />
      </div>
      {hint && (
        <p className="mt-1 text-[11px] text-muted-foreground/80 leading-relaxed">{hint}</p>
      )}
    </div>
  );
}

function OutputRow({
  label,
  value,
  emphasized,
  muted,
}: {
  label: string;
  value: string;
  emphasized?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
      <span
        className={`text-xs ${
          emphasized
            ? "font-mono uppercase tracking-wider text-foreground"
            : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
      <span
        className={`font-mono tabular-nums ${
          emphasized ? "text-2xl font-bold text-foreground" : muted ? "text-base text-foreground" : "text-base"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
