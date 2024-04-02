import Link from "next/link";
import { usePathname } from "next/navigation";

// Interfaces
interface Params {
    item: { 
        title: string;
        path: string;
    };
}

export default function NavLink({ item }: Params) {
    const pathName = usePathname();

    return (
        <li className={`${pathName === item.path ? "bg-white text-black" : ""} py-1.5 px-5 rounded-full font-bold`}>
            <Link href={item.path}>{item.title}</Link>
        </li>
    )
}
