import bg from "../../assets/image-testi.png";
import vector from "../../assets/Vector5.png";

function GreenPill({ children }) {
  return (
    <span className="bg-[#e8f5e9] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full whitespace-nowrap">
      {children}
    </span>
  );
}

function WavyOrangeUnderline({ children }) {
  return (
    <span className="relative inline-block pb-1">
      <span className="relative z-[1]">{children}</span>
      <svg
        className="absolute left-0 right-0 -bottom-0.5 h-2 sm:h-3 w-full text-[#f0806a]"
        viewBox="0 0 120 12"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M2 8c12-4 28-6 40-5s24 4 36 3 28-5 38-4"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

const quote =
  "Elementum delivered the site within the timeline as requested. In the end, the client saw a 50% increase in traffic within days of launch. They also demonstrated an impressive ability to adopt new technologies that proved easy to use and reliable.";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="gebril text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            
            <GreenPill>What</GreenPill> our customer{" "}
            
            <span className="block sm:inline">
              says{" "}
              <span className="relative inline-block">
                about us
                <img
                  src={vector}
                  alt=""
                  className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 w-[110%]"
                />
              </span>
            </span>

          </h2>
        </div>

        {/* CONTENT */}
        <div className="relative mt-10 sm:mt-14 md:mt-16 flex items-center justify-center">

          {/* BACKGROUND */}
          <img
            src={bg}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[100%] max-w-[1200px] opacity-90 pointer-events-none"
          />

          {/* CARD */}
          <div className="relative z-10 w-full max-w-xl sm:max-w-2xl px-2 sm:px-4">
            <div className="rounded-xl sm:rounded-2xl px-5 py-7 sm:px-8 sm:py-10 md:px-10 md:py-10 bg-[#D7EEDD] border border-neutral-200 shadow-sm">
              
              <blockquote className="relative text-neutral-600 text-sm sm:text-base leading-relaxed">

                {/* OPEN QUOTE */}
                <span className="absolute left-0 top-0 text-4xl sm:text-5xl text-neutral-300 -translate-x-1 -translate-y-2">
                  &ldquo;
                </span>

                <p className="pl-5 sm:pl-6 pr-2 pt-4 pb-8">
                  {quote}
                </p>

                {/* CLOSE QUOTE */}
                <span className="absolute right-0 bottom-0 text-3xl sm:text-4xl text-neutral-300 translate-y-2">
                  &rdquo;
                </span>

              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}