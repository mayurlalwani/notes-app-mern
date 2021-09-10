import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={() => <MyNotes />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
