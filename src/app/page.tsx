"use client";

import { DATA } from "@/app/data";
import {
  AboutMe,
  Blogs,
  Contact,
  Experience,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
} from "@/components/sections";
import GridPattern from "@/components/ui/GridPattern";
import TargetCursor from "@/components/ui/target-cursor";
import useMobileDetection from "@/hooks/use-mobile";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function Page() {
  const checkMobile = useMobileDetection();

  return (
    <div className="">
      <div className=" mx-auto px-4 pt-6 sm:pt-12 w-full lg:w-2/3 xl:w-1/2 text-foreground">
        <FadeInOnScroll>
          <Navbar />
        </FadeInOnScroll>

        <main className="px-4 min-h-lvh">
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          />
          <FadeInOnScroll>
            <Header data={DATA.HEADER} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <AboutMe data={DATA.ABOUT_ME} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Experience data={DATA.EXPERIENCE} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Projects data={DATA.PROJECTS} all={DATA.ALL_PROJECTS} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Blogs data={DATA.BLOGS} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Skills data={DATA.SKILLS} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Contact data={DATA.HEADER} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Footer />
          </FadeInOnScroll>
        </main>

        {!checkMobile && <TargetCursor spinDuration={2} hideDefaultCursor />}
      </div>
    </div>
  );
}
