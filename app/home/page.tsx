import Navbar from "@/components/ui/Navbar";
import PageTitle from "@/components/ui/PageTitle";

import GreetingCard from "./components/GreetingCard";
import TogetherCard from "./components/TogetherCard";
import TodayWorldCard from "./components/TodayWorldCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-16">

        <PageTitle
          title="🏡 Our Home"
          subtitle="A place where distance disappears."
        />

        <GreetingCard />

        <TogetherCard />

        <TodayWorldCard />

      </div>

    </main>
  );
}