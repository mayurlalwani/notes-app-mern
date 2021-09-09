import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/screens/LandingPage/LandingPage.js";

const App = () => {
  return (
    <>
      <Header />
      <main className="App">
        <LandingPage />
      </main>
      <Footer />
    </>
  );
};

export default App;
