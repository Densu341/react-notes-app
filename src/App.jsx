import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";
import LocaleContext from "./contexts/LocaleContext";
import Navigation from "./components/Navigation";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import ToggleTheme from "./components/ToggleTheme";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Archive from "./pages/Archive";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import ToggleLang from "./components/ToggleLang";
import Error from "./pages/Error";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    if (initializing) {
      const fetchData = async () => {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      };

      fetchData();
    }
  }, [theme, initializing]);

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  return (
    <>
      <header className="p-4">
        {authedUser === null ? (
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
            </h1>
            <div className="flex items-center gap-4">
              <ToggleLang />
              <ToggleTheme />
            </div>
          </nav>
        ) : (
          <Navigation logout={onLogout} name={authedUser.name} />
        )}
      </header>
      <main className="px-4 mx-auto flex h-screen ">
        <div className="hidden md:block">{authedUser && <Sidebar />}</div>
        <Routes>
          {!authedUser && (
            <>
              <Route
                path="/*"
                element={<Login loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<Register />} />
            </>
          )}
          {authedUser && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/note/:id" element={<Detail />} />
              <Route path="/add" element={<Add />} />
              <Route path="/*" element={<Error />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
};

export default App;
