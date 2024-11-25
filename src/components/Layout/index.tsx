import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
