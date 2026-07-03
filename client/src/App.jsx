import { Button } from "@/components/ui/button";
import Login from "./pages/login";
import { LogIn } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection.jsx";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Children } from "react";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
