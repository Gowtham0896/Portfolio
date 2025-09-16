export function Certifications() {
  const items = [
    { name: "Microsoft Security Operation Analyst", org: "SC-200" },
    { name: "eLearn Junior Penetration Tester", org: "eLearnSecurity (2024)" },
    { name: "Splunk Core Certified User", org: "Splunk (2024)" },
    { name: "CompTIA Security+", org: "eJPTv2" },
    { name: "AWS Security Specialty", org: "AWS (In Progress)" },
  ]
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h2 className="text-2xl font-semibold text-white">Certificates</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((c) => (
          <div key={c.name} className="rounded-lg border bg-card p-4">
            <p className="font-medium">{c.name}</p>
            <p className="text-sm text-muted-foreground">{c.org}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
