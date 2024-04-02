import Image from "next/image";

export default function SinglePost() {
    return (
      <main className="flex gap-[70px]">
        <div className="hidden flex-1 relative h-[calc(100vh-200px)] md:block">
          <Image 
            src="https://images.pexels.com/photos/8876645/pexels-photo-8876645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Blog Image" 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="basis-8/12 flex flex-col gap-10">
          <h1 className="text-6xl font-bold">Title</h1>
          <div className="flex gap-6">
            <Image 
              src="https://images.pexels.com/photos/8876645/pexels-photo-8876645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Blog Image" 
              height={50}
              width={50} 
              className="rounded-full object-cover"
            />

            <div className="flex flex-col gap-1">
              <span className="text-gray-400 font-bold">Author</span>
              <span className="font-medium">Terry Jefferson</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-gray-400 font-bold">Published</span>
              <span className="font-medium">01.01.2012</span>
            </div>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate enim aut mollitia a nulla ex expedita. Aspernatur unde delectus id ipsum mollitia? Neque vero iste ipsa debitis iusto enim explicabo cumque illo aliquid unde ullam non asperiores quam quis esse, quisquam, quibusdam reiciendis accusamus architecto. Modi repudiandae a nostrum quas, dolores sint quae? Unde illum, soluta recusandae doloribus minima quod molestias praesentium deserunt, necessitatibus consequuntur dolor expedita facilis velit!
          </div>
        </div>
      </main>
    );
  }