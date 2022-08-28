import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex-auto justify-center min-w-[400px] overflow-hidden">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
