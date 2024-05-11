import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { store } from "./services/store";
import { Provider } from "react-redux";

import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </Provider>
  );
};

export default App;
