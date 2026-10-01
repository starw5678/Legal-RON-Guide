import { CheckCircle2, ExternalLink, FileText, ShieldCheck, Video, WalletCards } from 'lucide-react';

const setupSteps = [
  'Confirm Texas notary eligibility and complete the required education step in SOSPortal.',
  'Apply for or renew a traditional Texas notary commission first if needed.',
  'Get an x.509 compliant digital certificate and an electronic seal from a third-party provider.',
  'Submit the Online Notary Public application through SOSPortal.',
  'Choose a RON platform that supports identity proofing, credential analysis, audio-video recording, journal entries, and secure storage.',
  'Create a simple client intake form, price sheet, scheduling link, and payment workflow.',
];

const costItems = [
  { item: 'Traditional Texas notary setup', range: '$80-$200', note: 'Bond, application, basic seal, journal, and supplies.' },
  { item: 'Digital certificate and e-seal', range: '$60-$200+', note: 'Required for online notarization setup.' },
  { item: 'RON platform', range: '$0-$99+/mo', note: 'Some platforms charge monthly, per transaction, or both.' },
  { item: 'Website and booking tools', range: '$0-$50/mo', note: 'Landing page, form, calendar, and payment link.' },
];

const workflow = [
  'Client requests service and uploads documents.',
  'You confirm the notarization type, ID requirements, and signer availability.',
  'Client pays or places a deposit before the session.',
  'RON platform verifies identity and records the audio-video session.',
  'You complete the notarial act, journal entry, digital seal, and certificate.',
  'Client receives the completed document through the secure platform.'
];

function Section({ icon: Icon, title, children }) {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="icon-wrap"><Icon size={20} /></span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <main>
      <header className="hero">
        <nav className="topbar">
          <span className="brand">Legal RON Guide</span>
          <a href="https://www.sos.state.tx.us/statdoc/notary-public.shtml" target="_blank" rel="noreferrer">
            Texas SOS <ExternalLink size={16} />
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Texas Remote Online Notary Starter System</p>
          <h1>Build the online notary workflow before you chase random tools.</h1>
          <p>
            A practical checklist for setting up a Texas RON business: eligibility,
            digital seal, platform, client flow, payments, and launch basics.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#checklist">Start checklist</a>
            <a className="secondary" href="#costs">See startup costs</a>
          </div>
        </div>
      </header>

      <div className="layout">
        <Section icon={ShieldCheck} title="Official Starting Point">
          <p>
            Texas says an Online Notary Public has the same authority as a traditional notary and performs online notarizations through secure two-way audio-video conferences that meet legal requirements. Start with the Texas Secretary of State page before buying software.
          </p>
          <a className="source-link" href="https://www.sos.state.tx.us/statdoc/notary-public.shtml" target="_blank" rel="noreferrer">
            Open Texas SOS notary page <ExternalLink size={16} />
          </a>
        </Section>

        <Section icon={CheckCircle2} title="Launch Checklist">
          <ol id="checklist" className="checklist">
            {setupSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Section>

        <Section icon={WalletCards} title="Startup Cost Map">
          <div id="costs" className="cost-grid">
            {costItems.map((cost) => (
              <article className="cost-card" key={cost.item}>
                <h3>{cost.item}</h3>
                <strong>{cost.range}</strong>
                <p>{cost.note}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section icon={Video} title="Client Workflow">
          <div className="workflow">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={FileText} title="Business Notes">
          <div className="notes">
            <p><strong>Positioning:</strong> Sell convenience, speed, and professionalism. Do not market it like a shortcut around legal requirements.</p>
            <p><strong>Records:</strong> Keep your journal, platform records, audio-video files, and client communications organized from day one.</p>
            <p><strong>Disclaimer:</strong> This guide is educational planning, not legal advice. Verify current rules before taking clients.</p>
          </div>
        </Section>
      </div>
    </main>
  );
}
