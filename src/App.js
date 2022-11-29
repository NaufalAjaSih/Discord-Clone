import Groups from "./components/Groups";
import Discover from "./components/Discover";
import MainComponent from "./components/MainComponent";
import "./App.css";

function App() {
  return (
    <div className="flex bg-[#393943]">
      {/* Friend */}
      <Groups />

      {/* Discover */}
      <Discover />

      {/* Main Content */}
      <MainComponent />

      {/* Hero */}
    </div>
  );
}

export default App;
