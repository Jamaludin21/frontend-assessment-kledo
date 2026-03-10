import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-800 font-sans">
      <Sidebar />
      <MainContent />
    </div>
  );
}