import SearchFrom from "./components/SearchForm";
import Gallery from "./components/Gallery";
import ThemeToggle from "./components/ThemeToggle";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main>
      <ToastContainer />
      <ThemeToggle />
      <SearchFrom />
      <Gallery />
    </main>
  );
};
export default App;
