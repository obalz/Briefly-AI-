import Hero from "./components/Hero";
import Demo from "./components/Demo";
import LoginForm from "./LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    // <>
    //   <main>
    //     {/* <LoginForm /> */}

    //     <div className="main">
    //       <div className="gradient" />
    //     </div>
    //     <div className="app">
    //       <Hero />
    //       <Demo />{" "}
    //     </div>
    //   </main>
    // </>
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/demo"
          element={
            <main>
              <div className="main">
                <div className="gradient" />
              </div>
              <div className="app">
                <Hero />
                <Demo />
              </div>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
