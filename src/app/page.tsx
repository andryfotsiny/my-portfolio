// Page.tsx

import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/Home";

export default function Page() {
  return (
    <main className="min-h-screen bg-darker-gray">
      <Navigation />
      <Home />
    </main>
  );
}