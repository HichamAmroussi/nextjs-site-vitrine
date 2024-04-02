"use client";

import Image from "next/image";

export default function Contact() {
    return (
      <main className="flex flex-col gap-[100px] py-16 md:flex-row">
        <div className="relative flex-1">
          <Image src="/contact.png" alt="Contact Image" fill className="object-contain" />
        </div>

        <div className="flex-1">
          <form action="" className="flex flex-col gap-5">
            <input type="text" placeholder="Name and Surname" className="p-5 rounded-md border-0 outline-0 bg-[#2d2b42]" />
            <input type="text" placeholder="Email Address" className="p-5 rounded-md border-0 outline-0 bg-[#2d2b42]" />
            <input type="text" placeholder="Phone Number (Optional)" className="p-5 rounded-md border-0 outline-0 bg-[#2d2b42]" />
            <textarea 
              name="" 
              id="" 
              cols={30} 
              rows={10} 
              placeholder="Message"
              className="p-5 rounded-md border-0 outline-0 bg-[#2d2b42]"
            ></textarea>

            <button className="font-bold bg-blue-600 p-5 border-0 rounded-md">Send</button>
          </form>
        </div>
      </main>
    );
  }