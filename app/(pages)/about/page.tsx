import Carousel from "../../components/Carousel";
import profileImages from "@/app/data/profileImages";
import nationalParkSliderImages from "@/app/data/nationalParkSliderImages";
import techItems from "@/app/data/techItems";
import HorizontalScroller from "@/app/components/HorizontalScroller";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">About Me</h1>

      {/* Profile + About text */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Carousel
          slides={profileImages}
          className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-10/12 rounded-2xl overflow-hidden shadow-md mx-auto"
        />
        <div className="space-y-4">
          <p>
            I&apos;m Nico Frezzia — a software developer and student passionate about creating
            modern, user-friendly applications that make life easier and more connected. I enjoy
            working on projects that bring together clean design, performance, and functionality.
          </p>
          <p>
            My background includes experience with React Native, AWS, Spring Boot, and a range of
            backend and frontend technologies. I love learning new frameworks, improving user
            experiences, and building systems that solve real-world problems.
          </p>
          <p>
            Outside of development, you&apos;ll often find me exploring creative ideas, mentoring peers,
            or working on side projects that mix technology with design and automation. I&apos;m always
            curious, always building, and always learning something new.
          </p>
        </div>
      </div>

      {/* Tech list */}
      <div className="pt-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tech I Enjoy Working With</h2>
        <HorizontalScroller items={techItems} speed={50} />
      </div>

      {/* Scenic images */}
      <div className="flex flex-col gap-4">
        <p>
          When I&apos;m not coding, I enjoy spending time outdoors, playing soccer, traveling, and capturing photos
          from my adventures. I also love tinkering with cars, filming creative projects, and
          learning about new technologies that push boundaries.
        </p>
        <Carousel slides={nationalParkSliderImages} showArrows showOverlay />
      </div>
    </section>
  );
}
