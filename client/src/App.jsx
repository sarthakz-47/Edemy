import { Button } from "@/components/ui/button";
import Login from "./pages/login";
import { LogIn } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection.jsx";
function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Login />
    </main>
  );
}

export default App;
