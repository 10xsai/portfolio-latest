"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import BlurFade from "./magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/app/page";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

// Circle component
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex rounded-full size-12 items-center justify-center border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

// Div component
const Div = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn(className, "z-10")}>
      <Badge>{children}</Badge>
    </div>
  );
});

Circle.displayName = "Circle";
Div.displayName = "Div";

// SkillsCard component
export function SkillsCard({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const domains = DATA.skills.domains;
  const technologies = DATA.skills.technologies;

  // State to check if refs are ready
  const [refsReady, setRefsReady] = useState(false);

  // Initialize ref arrays
  const domainRefs = useRef<HTMLDivElement[]>(Array(domains.length).fill(null));
  const techRefs = useRef<HTMLDivElement[][]>(
    Array(domains.length)
      .fill(null)
      .map(() => [])
  );

  useEffect(() => {
    // Check if all refs are populated
    const allRefsReady =
      domainRefs.current.every((ref) => ref !== null) &&
      techRefs.current.every((techGroup) => techGroup.length > 0);
    if (allRefsReady) {
      setRefsReady(true);
    }
  }, [domainRefs.current, techRefs.current]);

  return (
    <div
      className={cn(
        "relative flex pl-5 w-full items-center rounded-lg bg-background overflow-auto ",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-24">
        {/* Profile Avatar */}
        <div className="flex flex-col justify-center">
          <div
            ref={profileRef}
            className={cn(
              "z-10 flex size-12 items-center justify-center rounded-full bg-white p-3",
              className
            )}
          >
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-16 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>

        {/* Domains */}
        <div className="flex flex-col justify-center gap-12">
          {domains.map((domain, index) => (
            <Div
              key={index}
              ref={(el) => {
                if (el) domainRefs.current[index] = el; // Assign refs dynamically
              }}
            >
              {domain}
            </Div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-col justify-center gap-6">
          {technologies.map((techGroup, domainIndex) => (
            <div key={domainIndex} className="flex gap-2">
              {techGroup.map(({ src, alt, tooltip }, techIndex) => (
                <Circle
                  key={techIndex}
                  ref={(el) => {
                    if (!techRefs.current[domainIndex]) {
                      techRefs.current[domainIndex] = [];
                    }
                    if (el) techRefs.current[domainIndex][techIndex] = el; // Ensure techRefs is populated correctly
                  }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image src={src} alt={alt} width={40} height={40}></Image>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </Circle>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Render Animated Beams only when refs are ready */}
      {refsReady && (
        <>
          {/* Animated Beams for Profile to Domains */}
          {domains.map((_, index) => (
            <AnimatedBeam
              key={`profile-to-domain-${index}`}
              containerRef={containerRef}
              fromRef={profileRef}
              toRef={{ current: domainRefs.current[index] }} // Proper ref object format
              duration={3}
              curvature={240 - index * 85} // Adjust curvature based on index
            />
          ))}

          {/* Animated Beams for Domains to Technologies */}
          {technologies.map((techGroup, domainIndex) => {
            let initial_ref = domainRefs.current[domainIndex];
            return techGroup.map((_, techIndex) => {
              const animatedBeam = (
                <AnimatedBeam
                  key={`domain-to-tech-${domainIndex}-${techIndex}`}
                  containerRef={containerRef}
                  fromRef={{ current: initial_ref }} // Proper ref object format
                  toRef={{
                    current: techRefs.current[domainIndex]?.[techIndex],
                  }} // Optional chaining to prevent undefined access
                  duration={3}
                />
              );
              initial_ref = techRefs.current[domainIndex]?.[techIndex];
              return animatedBeam;
            });
          })}
        </>
      )}
    </div>
  );
}
