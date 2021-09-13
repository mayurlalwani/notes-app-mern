import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./components/screens/LoginPage/LoginPage";
import RegisterPage from "./components/screens/RegisterPage/RegisterPage";
import CreateNote from "./components/screens/CreateNote/CreateNote";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/create-note" component={CreateNote} exact />
        <Route path="/mynotes" component={() => <MyNotes />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
