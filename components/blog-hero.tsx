import Image from "next/image";

export function BlogHero() {
  return (
    <section className="lg:py-20 md:py-16 sm:py-8 py-8 lg:px-8 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white flex relative overflow-hidden">
      <div className="container lg:mx-auto text-start lg:px-32 md:px-16">
        <h2 className="text-lg lg:text-2xl">Welcome to</h2>
        <h1 className="text-2xl lg:text-6xl sm:text-3xl  mb-6 text-balance">
          Run Alpha Blog
        </h1>
        <p className="lg:text-xl font-light mb-8 max-w-xl  text-pretty text-sm">
          Stay ahead with cutting-edge insights, tutorials, and analysis from
          industry experts. Explore the latest trends in development, AI, and
          innovation.
        </p>
      </div>
      <div className="triangle-right absolute -left-4 opacity-30 bottom-0 " />
      <div className="absolute top-0 md:-right-72 right-0 opacity-30 md:opacity-70  h-full lg:w-3/4 w-full">
        <Image
          src="/hero-sec.png"
          alt="hero"
          className="object-cover opacity-70"
          fill
          // width={1000}
          // height={1000}
        />
      </div>
    </section>
  );
}
