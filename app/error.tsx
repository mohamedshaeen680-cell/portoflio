"use client";
export default function Err({ reset }: { error: Error; reset: () => void }) {
  return <main className="mx-auto max-w-md p-12 text-center"><h1 className="text-2xl font-bold">Something went wrong</h1><p className="mt-2">The page couldn't load. Try again in a moment.</p><button className="btn btn-primary mt-6" onClick={reset}>Try again</button></main>;
}
