import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-3xl px-4 container">
      <Navbar />
      <Hero />
    </div>
  );
}
