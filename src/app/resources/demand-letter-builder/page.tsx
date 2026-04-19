'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const STEPS = [
  { id: 1, label: 'Your Info' },
  { id: 2, label: 'The Accident' },
  { id: 3, label: 'Your Injuries' },
  { id: 4, label: 'Your Damages' },
  { id: 5, label: 'Your Demand' },
  { id: 6, label: 'Documents' },
  { id: 7, label: 'Generate' },
];

interface F {
  claimantName: string; claimantAddress: string; claimantCity: string; claimantState: string;
  claimantZip: string; claimantPhone: string; claimantEmail: string;
  accidentDate: string; accidentTime: string; accidentLocation: string; accidentDescription: string;
  policeReportNumber: string; policeDepartment: string;
  otherDriverName: string; otherDriverInsurance: string; otherDriverPolicyNumber: string; otherDriverContact: string;
  erVisit: boolean; erFacility: string; erDate: string; erDiagnosis: string;
  followUpVisits: string; physicalTherapy: boolean; ptSessions: string;
  otherTreatment: string; mmiDate: string; ongoingRestrictions: string;
  medicalBillsTotal: string; lostWagesTotal: string; lostWagesDays: string; propertyDamageTotal: string; painAndSuffering: string;
  policyLimitsKnown: boolean; policyLimitsAmount: string; settlementDemand: string; expirationDays: string;
  documents: File[];
}

const D: F = {
  claimantName: '', claimantAddress: '', claimantCity: '', claimantState: '', claimantZip: '',
  claimantPhone: '', claimantEmail: '',
  accidentDate: '', accidentTime: '', accidentLocation: '', accidentDescription: '',
  policeReportNumber: '', policeDepartment: '',
  otherDriverName: '', otherDriverInsurance: '', otherDriverPolicyNumber: '', otherDriverContact: '',
  erVisit: false, erFacility: '', erDate: '', erDiagnosis: '',
  followUpVisits: '', physicalTherapy: false, ptSessions: '',
  otherTreatment: '', mmiDate: '', ongoingRestrictions: '',
  medicalBillsTotal: '', lostWagesTotal: '', lostWagesDays: '', propertyDamageTotal: '', painAndSuffering: '',
  policyLimitsKnown: false, policyLimitsAmount: '', settlementDemand: '', expirationDays: '30',
  documents: [],
};

export default function DemandLetterBuilder() {
  const [step, setStep] = useState(1);
  const [d, setD] = useState<F>(D);
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [docNames, setDocNames] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const up = (k: keyof F, v: F[keyof F]) => setD((p) => ({ ...p, [k]: v }));

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setD((p) => ({ ...p, documents: [...p.documents, ...files] }));
    setDocNames((p) => [...p, ...files.map((f) => f.name)]);
  };

  const removeDoc = (i: number) => {
    setD((p) => ({ ...p, documents: p.documents.filter((_, idx) => idx !== i) }));
    setDocNames((p) => p.filter((_, idx) => idx !== i));
  };

  const generate = async () => {
    setLoading(true);
    setErr('');
    setLetter('');
    try {
      const res = await fetch('/api/generate-demand-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d),
      });
      if (!res.ok) throw new Error('Generation failed. Please try again.');
      const json = await res.json();
      setLetter(json.letter);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(letter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const prog = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <main className="container builder-page">
      <p className="eyebrow">Demand Letter Builder</p>
      <h1>Build Your Demand Letter in 15 Minutes</h1>
      <p className="lead-text">
        Answer the questions below. Upload your documents at the end — we will generate a complete,
        ready-to-send demand letter. No attorney required.
      </p>

      {/* Progress */}
      <div className="step-tracker">
        {STEPS.map((s) => (
          <span key={s.id} className={step === s.id ? 'active' : step > s.id ? 'done' : ''}>
            {s.label}
          </span>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${prog}%` }} />
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <section className="step-section">
          <h2>Your Information</h2>
          <p className="step-desc">Your full legal name and current contact information for the letter header.</p>
          <div className="form-grid">
            <Field label="Full Legal Name">
              <input value={d.claimantName} onChange={(e) => up('claimantName', e.target.value)} placeholder="Jane M. Smith" />
            </Field>
            <Field label="Street Address">
              <input value={d.claimantAddress} onChange={(e) => up('claimantAddress', e.target.value)} placeholder="123 Main Street" />
            </Field>
            <Field label="City">
              <input value={d.claimantCity} onChange={(e) => up('claimantCity', e.target.value)} placeholder="Atlanta" />
            </Field>
            <Field label="State / ZIP" half>
              <input value={d.claimantState} onChange={(e) => up('claimantState', e.target.value)} placeholder="GA" maxLength={2} />
              <input value={d.claimantZip} onChange={(e) => up('claimantZip', e.target.value)} placeholder="30301" style={{ flex: 2 }} />
            </Field>
            <Field label="Phone">
              <input type="tel" value={d.claimantPhone} onChange={(e) => up('claimantPhone', e.target.value)} placeholder="(404) 555-0100" />
            </Field>
            <Field label="Email">
              <input type="email" value={d.claimantEmail} onChange={(e) => up('claimantEmail', e.target.value)} placeholder="jane@email.com" />
            </Field>
          </div>
        </section>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <section className="step-section">
          <h2>The Accident</h2>
          <p className="step-desc">What happened, when, and where. Be factual and specific.</p>
          <div className="form-grid">
            <Field label="Date of Accident">
              <input type="date" value={d.accidentDate} onChange={(e) => up('accidentDate', e.target.value)} />
            </Field>
            <Field label="Time">
              <input type="time" value={d.accidentTime} onChange={(e) => up('accidentTime', e.target.value)} />
            </Field>
            <Field label="Location (street, city)" full>
              <input value={d.accidentLocation} onChange={(e) => up('accidentLocation', e.target.value)} placeholder="2800 Peachtree Road NE, Atlanta, GA" />
            </Field>
            <Field label="What happened" full>
              <textarea value={d.accidentDescription} onChange={(e) => up('accidentDescription', e.target.value)}
                placeholder="I was lawfully stopped at a red light. The other driver failed to stop and rear-ended my vehicle. The impact caused my car to strike the vehicle ahead. Police responded and cited the other driver."
                rows={5} />
            </Field>
            <Field label="Police Report #">
              <input value={d.policeReportNumber} onChange={(e) => up('policeReportNumber', e.target.value)} placeholder="Report #2026-001234" />
            </Field>
            <Field label="Police Department">
              <input value={d.policeDepartment} onChange={(e) => up('policeDepartment', e.target.value)} placeholder="Atlanta Police Department" />
            </Field>
          </div>
          <div className="infobox">
            <p className="infobox-title">At-Fault Driver</p>
            <div className="form-grid">
              <Field label="Driver Name" full>
                <input value={d.otherDriverName} onChange={(e) => up('otherDriverName', e.target.value)} placeholder="John B. Doe" />
              </Field>
              <Field label="Insurance Company">
                <input value={d.otherDriverInsurance} onChange={(e) => up('otherDriverInsurance', e.target.value)} placeholder="State Farm" />
              </Field>
              <Field label="Policy Number">
                <input value={d.otherDriverPolicyNumber} onChange={(e) => up('otherDriverPolicyNumber', e.target.value)} placeholder="Policy #123456789" />
              </Field>
              <Field label="Adjuster Contact">
                <input value={d.otherDriverContact} onChange={(e) => up('otherDriverContact', e.target.value)} placeholder="Jane Adjuster, (800) 555-0100" />
              </Field>
            </div>
          </div>
        </section>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <section className="step-section">
          <h2>Your Injuries</h2>
          <p className="step-desc">Every medical provider you have seen for injuries from this accident.</p>
          <div className="form-grid">
            <Field full labelStyle={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" checked={d.erVisit} onChange={(e) => up('erVisit', e.target.checked)} style={{ width: 'auto' }} />
              I went to an emergency room after the accident
            </Field>
            {d.erVisit && (
              <>
                <Field label="ER Facility">
                  <input value={d.erFacility} onChange={(e) => up('erFacility', e.target.value)} placeholder="Emory University Hospital ER" />
                </Field>
                <Field label="ER Date">
                  <input type="date" value={d.erDate} onChange={(e) => up('erDate', e.target.value)} />
                </Field>
                <Field label="Diagnosis" full>
                  <input value={d.erDiagnosis} onChange={(e) => up('erDiagnosis', e.target.value)} placeholder="Cervical strain, whiplash, lumbar sprain" />
                </Field>
              </>
            )}
            <Field label="Follow-up visits (how many, with whom?)" full>
              <input value={d.followUpVisits} onChange={(e) => up('followUpVisits', e.target.value)} placeholder="8 visits with Dr. Smith at OrthoAtlanta" />
            </Field>
            <Field full labelStyle={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" checked={d.physicalTherapy} onChange={(e) => up('physicalTherapy', e.target.checked)} style={{ width: 'auto' }} />
              I completed physical therapy
            </Field>
            {d.physicalTherapy && (
              <Field label="Number of PT sessions" full>
                <input value={d.ptSessions} onChange={(e) => up('ptSessions', e.target.value)} placeholder="12 sessions" />
              </Field>
            )}
            <Field label="Other treatment" full>
              <input value={d.otherTreatment} onChange={(e) => up('otherTreatment', e.target.value)} placeholder="Chiropractic, injections, specialist..." />
            </Field>
            <Field label="Maximum Medical Improvement (MMI) Date">
              <input type="date" value={d.mmiDate} onChange={(e) => up('mmiDate', e.target.value)} />
              <span className="field-hint">Date your doctor says you have recovered as much as possible</span>
            </Field>
            <Field label="Ongoing restrictions (what your doctor says you cannot do)" full>
              <textarea value={d.ongoingRestrictions} onChange={(e) => up('ongoingRestrictions', e.target.value)}
                placeholder="No lifting over 20 lbs, no prolonged sitting beyond 30 minutes" rows={3} />
            </Field>
          </div>
        </section>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <section className="step-section">
          <h2>Your Damages</h2>
          <p className="step-desc">The dollar amounts are the most important part. If you have exact figures use them. Estimates are fine if that is all you have.</p>
          <div className="form-grid">
            <Field label="Total Medical Bills ($)">
              <input type="number" value={d.medicalBillsTotal} onChange={(e) => up('medicalBillsTotal', e.target.value)} placeholder="8247" />
              <span className="field-hint">ER + therapy + follow-ups combined</span>
            </Field>
            <Field label="Total Lost Wages ($)">
              <input type="number" value={d.lostWagesTotal} onChange={(e) => up('lostWagesTotal', e.target.value)} placeholder="1800" />
              <span className="field-hint">{d.lostWagesDays ? `${d.lostWagesDays} missed` : 'Days missed from work'}</span>
            </Field>
            <Field label="Property Damage ($)">
              <input type="number" value={d.propertyDamageTotal} onChange={(e) => up('propertyDamageTotal', e.target.value)} placeholder="3500" />
              <span className="field-hint">Repairs, deductible, rental car</span>
            </Field>
            <Field label="Pain and Suffering ($)">
              <input type="number" value={d.painAndSuffering} onChange={(e) => up('painAndSuffering', e.target.value)} placeholder="20000" />
              <span className="field-hint">
                {d.medicalBillsTotal ? (
                  <>Using a 2.5× multiplier, your claim value is ~${Math.round(Number(d.medicalBillsTotal) * 2.5).toLocaleString()}</>
                ) : 'See the settlement value guide for the multiplier formula'}
              </span>
            </Field>
          </div>
        </section>
      )}

      {/* Step 5 */}
      {step === 5 && (
        <section className="step-section">
          <h2>Your Settlement Demand</h2>
          <p className="step-desc">Set your number. The demand is your opening position — not what you expect to receive.</p>
          <div className="form-grid">
            <Field full labelStyle={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" checked={d.policyLimitsKnown} onChange={(e) => up('policyLimitsKnown', e.target.checked)} style={{ width: 'auto' }} />
              I know the at-fault driver's policy limits
            </Field>
            {d.policyLimitsKnown && (
              <Field label="Policy Limits ($)">
                <input type="number" value={d.policyLimitsAmount} onChange={(e) => up('policyLimitsAmount', e.target.value)} placeholder="25000" />
              </Field>
            )}
            <Field label="Your Settlement Demand ($)">
              <input type="number" value={d.settlementDemand} onChange={(e) => up('settlementDemand', e.target.value)} placeholder="30000" />
              <span className="field-hint">
                {Number(d.medicalBillsTotal) + Number(d.lostWagesTotal) + Number(d.propertyDamageTotal) + Number(d.painAndSuffering) > 0
                  ? <>Total damages entered: ${(Number(d.medicalBillsTotal) + Number(d.lostWagesTotal) + Number(d.propertyDamageTotal) + Number(d.painAndSuffering)).toLocaleString()}</>
                  : 'See the settlement value guide if you are unsure'}
              </span>
            </Field>
            <Field label="Demand Expiration (days)">
              <input type="number" value={d.expirationDays} onChange={(e) => up('expirationDays', e.target.value)} min={7} max={60} />
              <span className="field-hint">Standard is 30 days. Minimum is 14 days.</span>
            </Field>
          </div>
        </section>
      )}

      {/* Step 6 */}
      {step === 6 && (
        <section className="step-section">
          <h2>Upload Your Documents</h2>
          <p className="step-desc">Upload any documents that support your claim. You can also skip this step and generate the letter without uploading.</p>
          <div className="doc-upload-area">
            <p className="doc-upload-icon">📷</p>
            <p className="doc-upload-main">Take a photo or select from your phone</p>
            <p className="doc-upload-sub">Tap to open camera — PDF, JPG, PNG accepted</p>
            <input type="file" multiple accept="image/*,application/pdf" capture="environment" onChange={handleFiles} id="file-input" style={{ display: 'none' }} />
            <label htmlFor="file-input" className="button button-secondary" style={{ cursor: 'pointer', display: 'inline-block', marginTop: '0.75rem' }}>
              Open Camera
            </label>
          </div>
          {docNames.length > 0 && (
            <ul className="doc-list">
              {docNames.map((name, i) => (
                <li key={i} className="doc-item">
                  <span>{name}</span>
                  <button onClick={() => removeDoc(i)} className="doc-remove">✕</button>
                </li>
              ))}
            </ul>
          )}
          <div className="doc-checklist">
            <p className="doc-checklist-title">Common documents to upload:</p>
            <div className="doc-check-grid">
              {['Medical records and bills', 'ER itemized statement', 'Physical therapy notes', 'Police accident report',
                'Pay stubs (wage loss)', 'Repair estimate or total loss letter', 'Photos of vehicle damage', 'Prior settlement offers'].map((doc) => (
                <label key={doc} className="doc-check-item">
                  <input type="checkbox" style={{ width: 'auto' }} />
                  {doc}
                </label>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step 7 */}
      {step === 7 && (
        <section className="step-section">
          <h2>Generate Your Letter</h2>
          <p className="step-desc">Review the summary below, then click Generate. Your complete demand letter will appear ready to copy and send.</p>

          <div className="review-grid">
            <div className="review-card">
              <p className="review-label">You</p>
              <p><strong>{d.claimantName || '—'}</strong></p>
              <p className="review-sub">{[d.claimantAddress, d.claimantCity, d.claimantState, d.claimantZip].filter(Boolean).join(', ')}</p>
              <p className="review-sub">{d.claimantPhone || '—'}</p>
            </div>
            <div className="review-card">
              <p className="review-label">Accident</p>
              <p>{d.accidentDate || '—'} at {d.accidentTime || '—'}</p>
              <p className="review-sub">{d.accidentLocation || '—'}</p>
              <p className="review-sub">{d.otherDriverName || '—'} / {d.otherDriverInsurance || '—'}</p>
            </div>
            <div className="review-card">
              <p className="review-label">Injuries</p>
              <p className="review-sub">
                ER: {d.erVisit ? `${d.erFacility || 'Yes'} — ${d.erDiagnosis || ''}` : 'None'}
              </p>
              <p className="review-sub">PT: {d.physicalTherapy ? d.ptSessions || 'Yes' : 'None'}</p>
              <p className="review-sub">MMI: {d.mmiDate || '—'}</p>
            </div>
            <div className="review-card">
              <p className="review-label">Damages</p>
              <p className="review-sub">
                Med: ${d.medicalBillsTotal || '—'} | Wages: ${d.lostWagesTotal || '—'} | Prop: ${d.propertyDamageTotal || '—'}
              </p>
              <p className="review-sub">Pain &amp; suffering: ${d.painAndSuffering || '—'}</p>
              <p className="review-sub">
                <strong>Total: ${[
                  Number(d.medicalBillsTotal), Number(d.lostWagesTotal),
                  Number(d.propertyDamageTotal), Number(d.painAndSuffering)
                ].reduce((a, b) => a + b, 0).toLocaleString()}</strong>
              </p>
            </div>
          </div>

          {!letter && (
            <div>
              <p className="demand-preview">
                Demand: <strong>${Number(d.settlementDemand).toLocaleString() || '—'}</strong>
                {d.policyLimitsKnown && ` (limits: $${Number(d.policyLimitsAmount).toLocaleString()})`}
                {' '}— expires in {d.expirationDays || 30} days
              </p>
              <button onClick={generate} disabled={loading} className="button button-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                {loading ? 'Generating...' : 'Generate Demand Letter'}
              </button>
            </div>
          )}

          {err && <div className="error-box">{err}</div>}

          {loading && !letter && (
            <div className="loading-state">
              <p>Building your letter...</p>
              <p className="review-sub">This takes about 10–15 seconds.</p>
            </div>
          )}

          {letter && (
            <div className="letter-output">
              <div className="letter-header">
                <h3>Your Demand Letter</h3>
                <button onClick={copy} className="button button-secondary">{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
              </div>
              <pre className="letter-text">{letter}</pre>
              <div className="disclaimer-box">
                <p><strong>Before you send:</strong> Review the letter carefully for accuracy — every date, dollar amount, and name. Attach your supporting documents as exhibits (medical bills, lost wages proof, police report). Send by certified mail with return receipt requested.</p>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Nav */}
      <div className="step-nav">
        <button onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1} className="button button-secondary" style={{ opacity: step === 1 ? 0.4 : 1 }}>
          ← Back
        </button>
        {step < STEPS.length && (
          <button onClick={() => setStep((s) => Math.min(STEPS.length, s + 1))} className="button button-primary">
            Continue →
          </button>
        )}
      </div>

      <style>{`
        .builder-page { padding-top: 2rem; padding-bottom: 5rem; max-width: 52rem; margin: 0 auto; }
        .lead-text { color: var(--muted); margin-bottom: 2rem; max-width: 52rem; line-height: 1.7; }
        .step-tracker { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
        .step-tracker span { font-size: 0.7rem; color: var(--muted); transition: color 0.2s; }
        .step-tracker span.active { color: var(--foreground); font-weight: 700; }
        .step-tracker span.done { color: var(--success, #16a34a); }
        .progress-bar { height: 4px; background: var(--border); border-radius: 2px; margin-bottom: 2.5rem; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--accent, #2563eb); transition: width 0.3s ease; }
        .step-section { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 2rem; margin-bottom: 1.5rem; }
        .step-section h2 { margin-top: 0; margin-bottom: 0.25rem; font-size: 1.25rem; }
        .step-desc { color: var(--muted); font-size: 0.875rem; margin-bottom: 1.5rem; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .field { display: flex; flex-direction: column; gap: 0.25rem; }
        .field.half { grid-column: span 1; }
        .field label { font-size: 0.8rem; font-weight: 600; color: var(--muted); }
        .field input, .field textarea { padding: 0.6rem 0.75rem; border: 1px solid var(--border); border-radius: 6px; background: var(--background); color: var(--foreground); font-size: 0.9rem; width: 100%; box-sizing: border-box; font-family: inherit; }
        .field input:focus, .field textarea:focus { outline: none; border-color: var(--accent, #2563eb); }
        .field-hint { font-size: 0.75rem; color: var(--muted); }
        .infobox { background: var(--background); border: 1px solid var(--border); border-radius: 8px; padding: 1rem; margin-top: 1rem; }
        .infobox-title { font-weight: 700; margin-bottom: 0.75rem; font-size: 0.875rem; }
        .doc-upload-area { border: 2px dashed var(--border); border-radius: 12px; padding: 2.5rem; text-align: center; margin-bottom: 1.5rem; }
        .doc-upload-icon { font-size: 2rem; margin-bottom: 0.5rem; }
        .doc-upload-main { font-weight: 600; margin-bottom: 0.25rem; }
        .doc-upload-sub { font-size: 0.8rem; color: var(--muted); margin-bottom: 0; }
        .doc-list { list-style: none; padding: 0; margin: 0 0 1.5rem; }
        .doc-item { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.75rem; background: var(--background); border: 1px solid var(--border); border-radius: 6px; margin-bottom: 0.5rem; font-size: 0.875rem; }
        .doc-remove { background: none; border: none; color: var(--muted); cursor: pointer; padding: 0 0.25rem; }
        .doc-checklist { background: var(--background); border-radius: 8px; padding: 1rem; }
        .doc-checklist-title { font-weight: 600; font-size: 0.875rem; margin-bottom: 0.75rem; }
        .doc-check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
        .doc-check-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; padding: 0.5rem; background: var(--card); border-radius: 6px; cursor: pointer; }
        .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
        .review-card { background: var(--background); border: 1px solid var(--border); border-radius: 8px; padding: 1rem; }
        .review-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--muted); margin-bottom: 0.25rem; }
        .review-card p { margin: 0; font-size: 0.875rem; }
        .review-sub { color: var(--muted); font-size: 0.8rem !important; }
        .demand-preview { font-size: 0.875rem; color: var(--muted); margin-bottom: 1rem; }
        .error-box { margin-top: 1rem; padding: 1rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; color: #dc2626; font-size: 0.875rem; }
        .loading-state { margin-top: 2rem; padding: 2rem; text-align: center; color: var(--muted); }
        .letter-output { margin-top: 2rem; }
        .letter-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .letter-header h3 { margin: 0; }
        .letter-text { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 2rem; white-space: pre-wrap; font-family: Georgia, serif; line-height: 1.8; font-size: 0.9rem; background: #fafafa; }
        .step-nav { display: flex; justify-content: space-between; padding-top: 1.5rem; border-top: 1px solid var(--border); margin-top: 1.5rem; }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr; }
          .review-grid { grid-template-columns: 1fr; }
          .doc-check-grid { grid-template-columns: 1fr; }
          .step-tracker span { font-size: 0.6rem; }
        }
      `}</style>
    </main>
  );
}

function Field({ label, half, full, children, labelStyle }: { label?: string; half?: boolean; full?: boolean; children: React.ReactNode; labelStyle?: React.CSSProperties }) {
  return (
    <div className={`field${half ? ' half' : ''}`} style={full ? { gridColumn: '1 / -1' } : {}}>
      {label && <label style={labelStyle}>{label}</label>}
      {children}
    </div>
  );
}
