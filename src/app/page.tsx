import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden bg-light dark:bg-dark">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar />
        <Dashboard />
      </div>
    </main>
  );
}
