import React from 'react';

export const metadata = {
  title: 'Mission Control — Georgia Car Crash Guide',
  description: 'Agent roster, pipeline status, and content operations for Georgia Car Crash Guide.',
};

export default function MissionControl() {
  // These would be hydrated from state files on the server in a full implementation
  // For now, this page is a static overview

  const agents = [
    {
      name: 'Monitor',
      role: 'News & Reddit scanner',
      model: 'gemma4:26b (local)',
      cost: 'Free',
      status: 'Idle',
      trigger: 'Every 2 days (heartbeat)',
      lastRun: '2026-04-27 10:33 ET',
      icon: '📡',
    },
    {
      name: 'Drafter',
      role: 'Article writing',
      model: 'MiniMax API',
      cost: '~$0.001/article',
      status: 'Idle',
      trigger: 'On demand from Ivy',
      lastRun: 'Pending first run',
      icon: '✍️',
    },
    {
      name: 'Ivy (Orchestrator)',
      role: 'Research & QC',
      model: 'MiniMax + CourtListener API',
      cost: 'Low',
      status: 'Active',
      trigger: 'After each draft',
      lastRun: 'Now',
      icon: '🧠',
    },
    {
      name: 'Publisher',
      role: 'Build & commit',
      model: 'Codex (OpenAI)',
      cost: '$$ — on approval only',
      status: 'Idle',
      trigger: 'After Lexi approval',
      lastRun: 'Not yet run',
      icon: '🚀',
    },
  ];

  const pipelineStats = {
    candidatesHigh: 6,
    candidatesMedium: 2,
    candidatesLow: 1,
    draftsInQueue: 8,
    awaitingApproval: 2,
    publishedArticles: 7,
  };

  const recentCandidates = [
    { topic: 'Trucking company liability evasion', score: 'high', source: 'news', when: '2026-04-27' },
    { topic: 'Hidden internal injuries after Georgia crash', score: 'high', source: 'news', when: '2026-04-27' },
    { topic: 'Fatal highway accident — I-16 wreck', score: 'medium', source: 'news', when: '2026-04-27' },
    { topic: 'Out-of-state accident liability (Georgia plates)', score: 'high', source: 'reddit', when: '2026-04-27' },
  ];

  const recentDrafts = [
    { title: 'Chameleon Carriers in Georgia Truck Wrecks', status: 'approved-ready', words: 2400, updated: '2026-04-27' },
    { title: 'What Families Should Know After a Fatal I-85 Truck Crash', status: 'in-review', words: 1910, updated: '2026-04-27' },
    { title: 'DUI Guilty Plea and Your Georgia Injury Claim', status: 'in-review', words: 2018, updated: '2026-04-27' },
    { title: 'Aortic Dissection After a Georgia Car Accident', status: 'in-review', words: 1739, updated: '2026-04-26' },
  ];

  const statusColor = (status) => {
    if (status === 'Active' || status === 'published') return 'var(--accent)';
    if (status === 'Idle') return 'var(--text-muted)';
    return 'var(--gold)';
  };

  return (
    <main className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="eyebrow">Pipeline Ops</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Mission Control
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Georgia Car Crash Guide — agent roster, pipeline stats, and content operations.
          </p>
        </div>

        {/* Pipeline Stats Row */}
        <div style={{ display: 'grid', gridStyle: 'grid-template-columns: repeat(4, 1fr)', gap: '1rem', marginBottom: '3rem' }} className="stat-row">
          {[
            { label: 'High-Priority Candidates', value: pipelineStats.candidatesHigh, sub: 'ready to draft' },
            { label: 'Drafts in Queue', value: pipelineStats.draftsInQueue, sub: 'awaiting review' },
            { label: 'Awaiting Approval', value: pipelineStats.awaitingApproval, sub: 'sent to Lexi' },
            { label: 'Published Articles', value: pipelineStats.publishedArticles, sub: 'live on site' },
          ].map(stat => (
            <div key={stat.label} className="stat-card" style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '1.25rem', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-deep)', letterSpacing: '-0.04em' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text)', marginTop: '0.25rem' }}>{stat.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Agent Roster */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1rem', borderBottom: '2px solid var(--line)', paddingBottom: '0.75rem' }}>
            Agent Roster
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {agents.map(agent => (
              <div key={agent.name} style={{ display: 'grid', gridTemplateColumns: '2rem 1fr 1fr 1fr 1fr 1rem', gap: '1rem', alignItems: 'center', background: 'var(--bg-secondary)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <span style={{ fontSize: '1.5rem' }}>{agent.icon}</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text)' }}>{agent.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{agent.role}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Model</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{agent.model}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Cost</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{agent.cost}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Last Run</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{agent.lastRun}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: statusColor(agent.status), display: 'inline-block' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{agent.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column: Recent Candidates + Recent Drafts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Recent Candidates */}
          <section>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1rem', borderBottom: '2px solid var(--line)', paddingBottom: '0.75rem' }}>
              Recent Candidates
            </h2>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {recentCandidates.map((c, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.75rem 1rem', background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--line)' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.2rem' }}>{c.topic}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.source} · {c.when}</div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '4px', background: c.score === 'high' ? 'var(--accent)' : 'var(--gold)', color: c.score === 'high' ? 'white' : 'var(--green-dark)', textTransform: 'uppercase' }}>
                    {c.score}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Drafts */}
          <section>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1rem', borderBottom: '2px solid var(--line)', paddingBottom: '0.75rem' }}>
              Recent Drafts
            </h2>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {recentDrafts.map((d, i) => (
                <div key={i} style={{ padding: '0.75rem 1rem', background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--line)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.2rem' }}>{d.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{d.words} words · {d.updated}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: '700', padding: '0.15rem 0.5rem', borderRadius: '4px', background: d.status === 'approved-ready' ? 'var(--accent)' : 'var(--gold)', color: 'white', textTransform: 'uppercase' }}>
                      {d.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Pipeline Flow */}
        <section style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1rem', borderBottom: '2px solid var(--line)', paddingBottom: '0.75rem' }}>
            Pipeline Flow
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0', alignItems: 'center' }}>
            {[
              { step: '1', name: 'Monitor', tool: 'gemma4:26b', desc: 'News + Reddit scan', cost: 'Free' },
              { step: '2', name: 'Drafter', tool: 'MiniMax', desc: 'Write article', cost: '$0.001' },
              { step: '3', name: 'Ivy', tool: 'Me + CourtListener', desc: 'Research + QC', cost: 'Low' },
              { step: '4', name: 'Lexi', tool: 'Email review', desc: 'Approve/reject', cost: 'Her time' },
              { step: '5', name: 'Publisher', tool: 'Codex', desc: 'Build page.tsx', cost: '$$$' },
              { step: '6', name: 'GitHub', tool: 'Vercel', desc: 'Goes live', cost: 'Free' },
            ].map(s => (
              <div key={s.step} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--accent-deep)', color: 'white', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontSize: '1rem' }}>{s.step}</div>
                <div style={{ fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.15rem' }}>{s.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{s.tool}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.desc}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: '600', marginTop: '0.2rem' }}>{s.cost}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <div style={{ marginTop: '3rem', padding: '1rem 1.25rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text)' }}>Token Cost Strategy:</strong> Monitor uses free local model. Drafter uses cheapest API model. Research stays in Ivy with CourtListener API only. Publisher only runs after explicit Lexi approval.
        </div>
      </div>
    </main>
  );
}