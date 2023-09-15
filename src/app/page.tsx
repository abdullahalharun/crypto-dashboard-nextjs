import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <Topbar />
      <Sidebar />
    </main>
  );
}
