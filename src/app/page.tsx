import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-[100px] py-16">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-7xl font-bold leading-[5.2rem]">Creative Thoughts Agency.</h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nulla voluptas quae itaque ad quam aperiam modi illum optio! Maxime.
        </p>

        <div className="flex gap-5">
          <button className="bg-blue-600 p-4 rounded-md min-w-32">Learn More</button>
          <button className="bg-gray-200 text-black p-4 rounded-md min-w-32">Contact</button>
        </div>

        <div className="relative w-full h-[50px] md:w-[500px]">
          <Image src="/brands.png" alt="" fill className="grayscale object-contain" />
        </div>
      </div>

      <div className="relative flex-1">
        <Image src="/hero.gif" alt="Hero Image" fill unoptimized className="object-contain" />
      </div>
    </main>
  );
}
