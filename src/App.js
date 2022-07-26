import { AppStyles } from "./styles/app.styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import Login from "./pages/login";
import Profile from "./pages/profile";

import Events from "./pages/events";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Account from "./pages/account";

const App = () => {
  const [user, setUser] = useState();

  return (
    <AppStyles>
      <Header />
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />
          <Route path="/profile" element={<Profile setter={setUser} user={user}/>} />
          <Route path="/events" element={<Events setter={setUser} user={user}/>} />
          <Route path="/about" element={<About setter={setUser} user={user}/>} />
          <Route
            path="/account"
            element={<Account setter={setUser} user={user} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppStyles>
  );
};

export default App;
