import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import { BLUR_FADE_DELAY } from "../page";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="my-32">
      <section id="about">
        <div className="flex justify-between gap-12">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-4xl mb-6 font-bold">About Me 🚀</h2>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summaryPart1}
            </Markdown>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="sm:size-56 size-24 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summaryPart2}
          </Markdown>
        </BlurFade>
      </section>
    </div>
  );
}
