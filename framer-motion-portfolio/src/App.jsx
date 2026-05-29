
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <SelectedWork />
    </div>
  );
}

export default App;
