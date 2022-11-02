import { Aside } from "../components/Aside";
import { MainContent } from "../components/MainContent";

export function Dashboard() {
  return (
    <div className="relative w-screen grid grid-cols-[220px_1fr] gap-6 3xl:grid-cols-[200px_1fr] 3xl:gap-0">
      <Aside />
      <MainContent />
    </div>
  );
}
