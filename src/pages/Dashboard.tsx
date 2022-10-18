import { Aside } from "../components/Aside";
import { MainContent } from "../components/MainContent";

export function Dashboard() {
  return (
    <div className="w-screen h-screen bg-gray-900 grid grid-cols-[220px_1fr] gap-6">
      <Aside />
      <MainContent />
    </div>
  );
}
