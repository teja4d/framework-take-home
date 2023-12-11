import { AiOutlineArrowUp } from "react-icons/ai";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import IconButton from "./elements/IconButton";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App container mx-auto p-4 font-sans">
      <Navbar brandName="Cottage retreate" />
      <Section />
        <IconButton
          textColor="green-100"
          fontSize="4xl"
          icon={<AiOutlineArrowUp />}
          onClick={handleScrollToTop}
          classNames="fixed bottom-8 right-8"
          />
      <Footer />
    </div>
  );
}

export default App;
