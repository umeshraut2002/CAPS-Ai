import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbardark from "./components/Navbardark";
import Footer from "./components/Footer";
import Home  from "./pages/Home";
import Loader from "./components/Loader";
import Chart from "./components/Chart";


function App() {
  return (
    <>
      <Loader />
      <Navbardark />
      <Sidebar />
      <Home />
      <Chart />
      <Footer />
    </>
  );
}

export default App;