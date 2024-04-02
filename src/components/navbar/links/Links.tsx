"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink"
import Image from "next/image";

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    }
]

export default function Links() {
    const [open, setOpen] = useState(false);

    // TEMPORARY
    const session = true;
    const isAdmin = true;

    return (
        <>
            <ul className="hidden items-center gap-3 md:flex">
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {
                    session ? (
                        <>
                            { isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} /> }
                            <button className="bg-white text-black py-1.5 px-3 rounded-sm font-bold">Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </ul>

            <Image 
                src="/menu.png" 
                alt="Hamburger Menu" 
                width={30} 
                height={30} 
                onClick={() => setOpen(prev => !prev)} 
                className="block md:hidden" 
            />

            {
                open && 
                <ul className="absolute top right-0 top-[80px] w-full h-[calc(100vh-80px)] flex flex-col gap-2 items-center justify-center bg-[#181734] z-50 md:hidden">
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </ul>
            }
        </>
    )
}
