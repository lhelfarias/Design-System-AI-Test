import { useEffect, useRef, useState, type FormEvent } from "react";
import { Breadcrumbs, Container, Panel, TextInput, Select, Fieldset, Radio, Checkbox, Button, SummaryList, StepIndicator } from "..";
import { Shell } from "./Shell";
import "./Simulator.css";

const RATE = 0.019; // example monthly interest, as in the Figma design
const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

/** Monthly payment of a loan: P·r / (1 − (1 + r)^−n), rounded to cents; total = payment × n. */
export function quote(amount: number, months: number) {
  const payment = Math.round(((amount * RATE) / (1 - (1 + RATE) ** -months)) * 100) / 100;
  return { payment, total: Math.round(payment * months * 100) / 100 };
}

const STEPS = ["Amount", "Account", "Review"];

/** Figma: "Ataraxia — Simulator", Desktop 20:3 and Mobile 20:343. Three steps with a Step indicator. */
export function Simulator() {
  const [amount, setAmount] = useState("500");
  const [months, setMonths] = useState("12");
  const [destination, setDestination] = useState("ataraxia");
  const [terms, setTerms] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);
  const stepHeading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  // Move focus to the new step's heading so screen reader and keyboard users start at the top of the step.
  useEffect(() => { if (firstRender.current) { firstRender.current = false; return; } stepHeading.current?.focus(); }, [step]);

  const value = Number(amount.replace(/[^0-9.]/g, ""));
  const valid = value >= 50 && value <= 2000;
  const q = quote(valid ? value : 0, Number(months));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (step === 1 && !valid) next.amount = "Enter an amount between $50 and $2,000";
    if (step === 2 && !destination) next.destination = "Select where to send the money";
    if (step === 2 && !terms) next.terms = "Confirm that you have read the terms";
    setErrors(next);
    if (Object.keys(next).length) return;
    if (step < STEPS.length) setStep(step + 1);
    else setSent(true);
  };
  const back = () => { setErrors({}); setSent(false); setStep(step - 1); };

  return (
    <Shell current="simulator" mainClassName="sim-main" band={<>
        <Breadcrumbs items={[{ label: "Home", href: "#" }, { label: "Card", href: "#card" }, { label: "Cash advance" }]} />
        <div className="sim-heading">
          <h1>Cash advance simulator</h1>
          <p>See what a cash advance from your Ataraxia card would cost before you confirm it.</p>
        </div>
      </>}>
        <Container>
          <div className="sim-columns">
            <Panel variant="solid" padding="xl" aria-label="Cash advance request">
              <form className="sim-form" onSubmit={submit} noValidate>
                <StepIndicator steps={STEPS} current={step} headingRef={stepHeading} />
                {step === 1 && <>
                  <TextInput label="Amount" hint="Between $50 and $2,000" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} error={errors.amount} />
                  <Select label="Installments" value={months} onChange={(e) => setMonths(e.target.value)} options={[6, 12, 24].map((m) => ({ value: String(m), label: `${m} months` }))} />
                </>}
                {step === 2 && <>
                  <Fieldset legend="Where should we send the money?" error={errors.destination}>
                    <Radio name="destination" label="Ataraxia account ending in 4821" value="ataraxia" checked={destination === "ataraxia"} onChange={() => setDestination("ataraxia")} />
                    <Radio name="destination" label="Another bank account" value="other" checked={destination === "other"} onChange={() => setDestination("other")} />
                  </Fieldset>
                  <Checkbox label="I have read the cash advance terms" checked={terms} onChange={(e) => setTerms(e.target.checked)} aria-invalid={errors.terms ? true : undefined} />
                  {errors.terms && <p className="ds-error-message"><span className="ds-visually-hidden">Error:</span>{errors.terms}</p>}
                </>}
                {step === 3 && (
                  <SummaryList rows={[
                    { key: "Amount", value: money(value) },
                    { key: "Installments", value: `${months} months` },
                    { key: "Send to", value: destination === "ataraxia" ? "Ataraxia account ending in 4821" : "Another bank account" },
                  ]} />
                )}
                <div className="sim-actions">
                  <Button type="submit">{step < STEPS.length ? "Continue" : "Confirm cash advance"}</Button>
                  {step > 1 ? <Button variant="secondary" type="button" onClick={back}>Back</Button> : <Button variant="secondary" type="button">Cancel</Button>}
                </div>
                <p role="status" className="sim-status">{sent ? "Request sent. We will confirm it by email." : ""}</p>
              </form>
            </Panel>
            <Panel variant="glass" padding="lg" as="aside" aria-labelledby="sim-summary-title">
              <h2 id="sim-summary-title" className="sim-summary-title">Your simulation</h2>
              <div aria-live="polite">
                <SummaryList
                  rows={[
                    { key: "Amount", value: valid ? money(value) : "—" },
                    { key: "Installments", value: `${months} months` },
                    { key: "Monthly payment", value: valid ? money(q.payment) : "—" },
                    { key: "Total cost", value: valid ? money(q.total) : "—" },
                  ]}
                />
              </div>
              <p className="sim-note">Monthly interest 1.9%. Example values, not a real offer.</p>
            </Panel>
          </div>
        </Container>
      </Shell>
  );
}
