

import { useState } from "react";
import { Navbar, Hero, SideMenu, About } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative z-0 bg-[#181818]">
                  <Hero />
                  <About />
                  <SideMenu />
                </div>
              </>
            }
          />
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
