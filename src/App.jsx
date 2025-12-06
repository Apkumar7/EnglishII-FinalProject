import React, { useState } from 'react'
<div className="w-16 h-16 flex items-center justify-center rounded-lg bg-slate-900/50 border border-slate-700">
<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h18" /><path d="M12 3v18" /></svg>
</div>
<div>
<h1 className="text-2xl font-semibold">Odyssey — Interactive CYOA</h1>
<p className="text-sm text-slate-300">Play perspectives: empathy, fate, and consequence</p>
</div>
</header>


<main className="flex gap-6">
<section className="flex-1">
<h2 className="text-xl font-bold">{node.title}</h2>
<p className="mt-3 text-slate-200 leading-relaxed">{node.description}</p>


<div className="mt-6 grid gap-3">
{node.choices.map((c, i) => (
<button key={i} onClick={() => choose(c)} className={`w-full text-left p-3 rounded-lg transition-shadow shadow-sm hover:shadow-lg border border-slate-600 bg-slate-800/40`}>
<div className="font-medium">{c.text}</div>
{c.consequence === 'death' && <div className="text-xs text-rose-400">Dangerous choice — may lead to death</div>}
</button>
))}
</div>
</section>


<aside className="w-72 p-4 bg-slate-900/30 rounded-lg border border-slate-700">
<h3 className="font-semibold">Journey</h3>
<div className="mt-3 text-sm text-slate-300 h-40 overflow-auto">
{history.length === 0 ? <em>Choices will appear here</em> : history.map((h, idx) => (
<div key={idx} className="mb-2">• <strong>{NODES[h.node].title}:</strong> {h.choice}</div>
))}
</div>


<div className="mt-4">
<button onClick={() => { setHistory([]); setNodeId('start') }} className="px-3 py-2 rounded bg-indigo-600 hover:bg-indigo-500">Restart</button>
</div>
</aside>
</main>


<footer className="mt-6 text-xs text-slate-400">
* Some choices are designed to illustrate themes. For Odysseus the narrative funnels back to the same endpoint to emphasize how different journeys can lead to the same reckoning.
</footer>
</div>
</div>
)
}
