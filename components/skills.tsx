const groups = [
  { label: 'Analytics', items: ['Power BI', 'Microsoft Excel', 'Data visualization', 'Statistical analysis'] },
  { label: 'Programming', items: ['Python', 'SQL', 'C / C++', 'Pandas & NumPy'] },
  { label: 'Workflow', items: ['Data cleaning', 'Critical thinking', 'Problem solving', 'Communication'] },
]

export default function Skills() {
  return <section id="about" className="neo-border border-x-0 bg-muted"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Capabilities / 03</p><h2 className="mt-4 text-balance font-serif text-5xl leading-none tracking-[-0.04em] text-primary md:text-7xl">The tools<br />behind the<br /><em className="text-accent">thinking.</em></h2></div><div className="grid gap-10 sm:grid-cols-3">{groups.map((group) => <div key={group.label}><h3 className="border-b border-accent pb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">{group.label}</h3><ul className="mt-5 flex flex-col gap-4">{group.items.map((item) => <li key={item} className="text-sm text-muted-foreground">{item}</li>)}</ul></div>)}</div></div></section>
}
