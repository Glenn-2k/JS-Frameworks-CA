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

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
