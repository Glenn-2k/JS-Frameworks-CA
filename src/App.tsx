import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Home</h1>
    </div>
  );
}

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
