import Link from "next/link";

export default function NotFound() {
    return (
      <main className="min-h-screen items-center justify-center flex flex-col gap-4">
        <h2 className="font-bold text-4xl">404 | Page Not Found.</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="mt-5 text-blue-500 underline">Return Home</Link>
      </main>
    );
  }