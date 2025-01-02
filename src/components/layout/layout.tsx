import { Outlet } from "react-router-dom";

// layout
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
