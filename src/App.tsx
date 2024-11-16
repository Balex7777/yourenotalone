import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import Psychology from "./components/Psychology/Psychology";
import Questions from "./components/Questions/Questions";
import SliderSection from "./components/SliderSection/SliderSection";
import Sources from "./components/Sources/Sources";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Navigation />
        <AboutUs />
        <Psychology />
        <Questions />
        <Sources />
        <SliderSection />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
