import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectCard({
  title,
  summary,
  impact,
  tags,
}: {
  title: string
  summary: string
  impact: string[]
  tags: string[]
}) {
  return (
    <Card className="text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-white">
        <p className="text-sm leading-relaxed text-white">{summary}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-white">
          {impact.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t} variant="secondary" className="text-white">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
