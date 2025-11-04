import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import CartModal from "./components/CartModal.tsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CartModal />
      <Footer />
    </div>
  );
}

export default App;
