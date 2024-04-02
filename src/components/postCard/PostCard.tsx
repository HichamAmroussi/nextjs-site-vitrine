import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[31%]">
        <div className="flex">
            <figure className="relative w-11/12 h-[400px]">
                <Image src="https://images.pexels.com/photos/8876645/pexels-photo-8876645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Thumbnail" fill className="object-cover" />
            </figure>
            <span className="text-sm rotate-[270deg] m-auto">01.01.2012</span>
        </div>

        <div>
            <h1 className="font-bold text-2xl mb-2 w-11/12">Title</h1>
            <p className="text-gray-400 w-11/12 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam consectetur, voluptatibus aperiam tenetur soluta dolore rem esse ducimus numquam quia.</p>
            <Link href="/blog/post" className="underline">Read more</Link>
        </div>
    </div>
  )
}
