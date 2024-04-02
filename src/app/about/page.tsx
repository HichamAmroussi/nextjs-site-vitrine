import Image from "next/image";

export default function About() {
    return (
      <main className="flex flex-col gap-[100px] py-16 md:flex-row">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-blue-600 font-bold">About Agency</h2>
          <h1 className="text-[54px] font-bold leading-[4.4rem]">
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className="text-xl font-light">
            We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas flexibility and precission We’re world’s Our
            Special Team best consulting & finance solution provider. Wide range
            of web and software development services.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-blue-600 text-2xl font-bold">10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-blue-600 text-2xl font-bold">10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-blue-600 text-2xl font-bold">10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <Image src="/about.png" alt="About image" fill className="object-contain" />
        </div>
      </main>
    );
  }