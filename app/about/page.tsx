import TextColorizer from "@/components/interactive/text-colorizer";
import SpeakButton from "@/components/interactive/speak-button";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">
          <TextColorizer text="About Me" color="text-purple-600" />
        </h1>
        <SpeakButton
          label="About details"
          text="I am a cybersecurity enthusiast specializing in SOC operations, threat analysis, and more."
        />
      </div>

      <p className="mb-6 text-white">
        I am passionate about cybersecurity, with experience in threat detection, security monitoring, and securing applications. My goal is to continually learn and contribute to the field of information security.
      </p>

      <ul className="mb-6 list-disc pl-6">
        <li><TextColorizer text="SOC Operations, SIEM Monitoring" /></li>
        <li><TextColorizer text="Penetration Testing, Vulnerability Assessment" /></li>
        <li><TextColorizer text="Security Audits and Risk Management" /></li>
      </ul>
    </main>
  );
}
