import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import SharedNotes from "./components/screens/SharedNotes/SharedNotes";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./components/screens/LoginPage/LoginPage";
import ProfilePage from "./components/screens/ProfilePage/ProfilePage";
import RegisterPage from "./components/screens/RegisterPage/RegisterPage";
import CreateNote from "./components/screens/CreateNote/CreateNote";
import SingleNote from "./components/screens/CreateNote/SingleNote";
import { useSelector } from "react-redux";

const App = () => {
  const [search, setSearch] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <BrowserRouter>
      {userInfo && <Header setSearch={setSearch} />}
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/create-note" component={CreateNote} exact />
        <Route path="/note/:id" component={SingleNote} exact />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
        <Route
          path="/sharednotes"
          component={() => <SharedNotes search={search} />}
        />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
