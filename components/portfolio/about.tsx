export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-white">About</h2>

          {/* Paragraph */}
          <p className="mt-3 text-white/90">
            Dedicated SOC Analyst with 3+ years of experience in security operations, threat detection, and incident
            response. Currently pursuing  Masters in Cybersecurity at University of Delaware. Skilled in cloud security,
            threat hunting, and forensic investigations with strong communication and collaboration abilities.
          </p>
        </div>

        {/* Info List */}
        <ul className="grid gap-2 rounded-lg border bg-card/20 p-4 text-sm text-white" data-no-colorize="true">
          <li>
            <strong className="font-semibold">Focus:</strong>{" "}
            <span>SOC Operations, SIEM Analysis, Threat Detection</span>
          </li>
          <li>
            <strong className="font-semibold">Frameworks:</strong>{" "}
            <span>MITRE ATT&CK, NIST CSF, ISO 27001</span>
          </li>
          <li>
            <strong className="font-semibold">Current Role:</strong>{" "}
            <span>SOC Analyst L1 at Citigroup</span>
          </li>
          <li>
            <strong className="font-semibold">Education:</strong>{" "}
            <span>MS Cybersecurity (2025), BTech Computer Science</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
