import { extractDomain } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface IExperienceData {
  WEBSITE: string;
  POSITION: string;
  LOCATION: string;
  DURATION: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
  LOGO: string;
}

export function Experience({
  data,
}: {
  data: Record<string, IExperienceData>;
}) {
  return (
    <div id="experience" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">experience.</h2>

      <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target flex gap-4 items-start">
            {/* Left Vertical Line */}
            <div className="w-[1px] bg-muted-foreground hover:bg-primary transition-all duration-300 mt-1" />

            {/* Company Logo (circular) */}
            <img
              src={value.LOGO}
              alt={`${value.POSITION} logo`}
              className="w-10 h-10 rounded-full object-cover border border-muted shrink-0 mt-1"
            />

            {/* Experience Content */}
            <div className="transition-all duration-300">
              <div className="flex sm:flex-row flex-col justify-between items-start">
                <div>
                  <p className="text-primary/90 text-lg">
                    {value.POSITION}{" "}
                    <span className="inline-block bg-secondary max-sm:mb-2 ml-2 px-2 py-1 rounded text-xs">
                      {value.LOCATION}
                    </span>
                  </p>
                  <p className="flex items-center text-sm">
                    at,{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 ml-1"
                      href={value.WEBSITE}
                    >
                      {extractDomain(value.WEBSITE)} <ArrowUpRight size={18} />
                    </a>
                  </p>
                </div>
                <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
                  {value.DURATION}
                </p>
              </div>

              <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                {value.DESCRIPTION.map((desc, index) => (
                  <li key={index}>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap items-center gap-2 mt-2 pl-3">
                {value.TECH_STACK.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-muted px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
