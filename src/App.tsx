import "react-calendar-heatmap/dist/styles.css";
import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

import Profile from "./pages/Profile";
import Repo from "./pages/Repo";
import Footer from "./components/Footer";
import { ThemeName, themes } from "./styles/themes";

function App() {
  const [themeName, setThemeName] = useState<ThemeName>("dark");

  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header
          toggleTheme={() =>
            setThemeName(themeName === "light" ? "dark" : "light")
          }
        />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>

        <Footer />

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
