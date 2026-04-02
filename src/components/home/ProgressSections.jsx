import t1 from "../../assets/t1.svg";
import t2 from "../../assets/t2.svg";
import vector from "../../assets/Vector5.png";
import bg from "../../assets/Vector 2517.png";
import arrow from "../../assets/Arrow 4.png";

function ReadMoreLink() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-3 text-sm font-medium text-black mt-6 hover:opacity-80 transition"
    >
      <span>Read more</span>
      <img
        src={arrow}
        alt="arrow"
        className="w-16 sm:w-20 md:w-24 h-auto transition-transform group-hover:translate-x-2"
      />
    </a>
  );
}

function GreenPill({ children }) {
  return (
    <span className="bg-[#c8e6c9] px-2.5 py-0.5 rounded-full whitespace-nowrap">
      {children}
    </span>
  );
}

export default function ProgressSections() {
  return (
    <section
      className="relative overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "right center",
        backgroundSize: "contain", // ✅ FIXED
      }}
    >
      <div className="relative z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION 1 */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14 lg:gap-20 py-12 md:py-20">

          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h2 className="gebril text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              
              <span className="relative inline-block">
                Tomorrow
                <img
                  src={vector}
                  alt=""
                  className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 w-[110%]"
                />
              </span>{" "}
              should <br />
              be better than <GreenPill>today</GreenPill>
            </h2>

            <p className="mt-4 md:mt-6 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-lg">
              We are a team of strategists, designers, communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>

            <ReadMoreLink />
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">

            {/* BACKGROUND BLOB */}
            <div className="hidden sm:block absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-rose-200/40 rounded-full blur-3xl" />

            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">

              {/* SHAPE */}
              <div className="absolute right-10 top-15 w-10 sm:w-32 md:w-20 h-10 sm:h-14 md:h-16 bg-[#f0806a] rotate-12" />

              {/* IMAGE */}
              <div className="relative w-full h-full flex items-center justify-center p-3">
                <div className="w-[80%] aspect-square rounded-full overflow-hidden shadow-inner">
                  <img
                    src={t1}
                    alt="team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14 lg:gap-20 py-12 md:py-20">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-full max-w-sm aspect-square">

              {/* TRIANGLES */}
              <div className="absolute left-5 top-4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-transparent border-b-[#f0806a]" z-0 />
              <div className="absolute right-2 bottom-2 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-transparent border-b-[#f0806a]" />

              {/* IMAGE */}
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={t2}
                  alt="team"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
           <h2 className="gebril text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
  
  <GreenPill>See</GreenPill> how we can{" "}
  
  <span className="whitespace-nowrap">
    help you{" "}
    <span className="relative inline-block">
      progress
      <img
        src={vector}
        alt=""
        className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 w-[110%]"
      />
    </span>
  </span>

</h2>

            <p className="mt-4 md:mt-6 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-lg">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design,
              digital, comms and social research.
            </p>

            <ReadMoreLink />
          </div>
        </div>

      </div>
    </section>
  );
}