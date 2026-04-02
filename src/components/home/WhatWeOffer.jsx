import Person1 from "../../assets/Person1.svg";
import vector from "../../assets/Vector5.png";
import bg from "../../assets/Vector 2517.png"; 


function GreenPill({ children }) {
  return (
    <span className="bg-[#e8f5e9] px-2.5 py-1 rounded-full whitespace-nowrap">
      {children}
    </span>
  );
}

function DoubleOrangeUnderline({ children }) {
  return (
    <span className="relative inline-block pb-1.5">
      <span className="relative z-[1]">{children}</span>
      <span
        className="absolute left-0 right-0 bottom-0 flex flex-col gap-0.5 pointer-events-none"
        aria-hidden
      >
        <span className="h-[3px] w-full rounded-full bg-[#e85d2c] opacity-90" />
        <span className="h-[3px] w-full rounded-full bg-[#f0806a] opacity-85" />
      </span>
    </span>
  );
}

const rows = [
  {
    description: "Office of multiple interest content",
    title: "Colaborative & partnership",
    accent: false,
  },
  {
    description: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
    accent: false,
  },
  {
    description: "Delta faucet content, social, digital",
    titleBefore: "Piloting digital ",
    titleHighlight: "confidence",
    accent: true,
  },
];

function RowArrow() {
  return (
    <span
      className="font-sans text-xl sm:text-2xl text-black shrink-0 leading-none"
      aria-hidden
    >
      &rarr;
    </span>
  );
}

export default function WhatWeOffer() {
  return (
    <section
      id="what-we-offer"
      className="relative bg-white overflow-hidden py-10 sm:py-16 md:py-24"
      aria-labelledby="what-we-offer-heading"
     
    >
      

      <div className="relative z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="what-we-offer-heading"
          className="gebril font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.45rem] font-semibold leading-snug tracking-tight text-black max-w-xl mb-10 sm:mb-12 md:mb-14"
        >
          What we <GreenPill>can</GreenPill>{" "}
          <br/>
<span className="relative inline-block">
            offer
            <img
              src={vector}
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[110%] rotate-[-2deg]"
            />
          </span>{" "}    you!    </h2>

          <img
  src={bg}
  alt=""
  className="absolute -right-70 top-7 -translate-y-1/2 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] opacity-80 pointer-events-none select-none"
/>

        <div className="border-t border-neutral-300">
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center py-6 sm:py-7 md:py-8 border-b border-neutral-300"
            >
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed md:col-span-4 order-1">
                {row.description}
              </p>

              <div className="gebril text-lg sm:text-xl md:text-2xl font-semibold text-black leading-snug md:col-span-6 order-2 md:order-2">
                {!row.accent && <span>{row.title}</span>}
                {row.accent && (
                  <span className="relative inline-block">
                    {row.titleBefore}
                    <span className="relative inline-block">
                      {row.titleHighlight}
                     
                    </span>
                  </span>
                )}
              </div>

              <div className="flex md:justify-end md:col-span-2 order-3">
                <RowArrow />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
