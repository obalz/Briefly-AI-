import Hero from "./components/Hero";
import Demo from "./components/Demo";
/* hello*/
import "./App.css";

export const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
