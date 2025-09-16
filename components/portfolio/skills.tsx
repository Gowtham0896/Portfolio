export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SkillCard
          title="SIEM and SOAR Platforms"
          items={["Splunk", "Microsoft Sentinel", "Elastic Stack", "IBM QRadar", "Wazuh", "LogRhythm", "IBM Resilient", "Cortex XSOAR", "Swimlane"]}
        />
        <SkillCard
          title="EDR and XDR Tools"
          items={["CrowdStrike Falcon", "SentinelOne", "Microsoft Defender", "FireEye HX"]}
        />
        <SkillCard title="Cloud Security" items={["AWS GuardDuty", "CSPM (Prisma, Wiz)", "AWS IAM", "S3 Security" , "EC2", "Cloud Trail", "Cloud Watch"]} />
        <SkillCard title="Programming/Scripting" items={["Python", "PowerShell", "Bash", "YARA", "JavaScript","GO"]} />
        <SkillCard
          title="IDS and IPS"
          items={["Snort", "Suricata", "Zeek","Security Onion",]}
        />
         <SkillCard
          title="Forensics Tools"
          items={["Ghidra", "Cuckoo Sandbox", "Volatility", "Autopsy", "FTK Imager"]}
        />
        <SkillCard title="IAM Tools"
         items={["CyberArk", "Okta", "Microsoft Entra ID", "Auth0", "Azure AD", "Zero Trust"]} 
         />
        <SkillCard title="Network and System"
         items={["IPSec", "OSI", "VLAN", "TCP/IP", "DMARC", "DNS", "TLS/SSL", "SPF", "DKIM", "VPN"]} 
         />
        <SkillCard title="Security Frameworks"
         items={["NIST", "Cyber Kill Chain", "MITRE ATT&CK", "STIX", "Diamond Model of Intrusion Analysis"]} 
         />
      </div>
    </section>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <h3 className="font-medium">{title}</h3>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}
