import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex justify-between py-7">
        <Link href="/" className="h-10 w-[83px] relative">
          <Image src="/logo.png" alt="Logo" fill />
        </Link>

        <div>
          <Links />
        </div>
      </nav>
    </header>
  )
}
