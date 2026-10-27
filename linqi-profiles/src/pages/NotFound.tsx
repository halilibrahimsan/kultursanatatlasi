import { Link } from "react-router-dom";

export default function NotFound({ message = "This page doesn't exist." }: { message?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md rounded-card bg-navy px-8 py-12 text-center text-white">
        <p className="text-4xl font-bold tracking-wide">LINQI</p>
        <p className="mt-3 font-medium text-brand-light">LINKS, SIMPLIFIED.</p>
        <hr className="my-8 border-navy-line" />
        <p className="text-gray-300">{message}</p>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 font-semibold hover:bg-brand-dark">
          Create your own page
        </Link>
      </div>
    </div>
  );
}
