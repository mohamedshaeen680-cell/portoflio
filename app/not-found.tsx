import Link from "next/link";
export default function NotFound() { return <main className="mx-auto max-w-md p-12 text-center"><h1 className="text-2xl font-bold">Page not found</h1><p className="mt-2">This page doesn't exist or isn't published.</p><Link href="/" className="btn btn-primary mt-6">Back to home</Link></main>; }
