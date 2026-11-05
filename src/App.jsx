import Greeting from "./Components/Greetings";
import { Button } from "./Components/Button";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />  
      <Greeting />
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
      <Footer />
    </div>
  );
}

export default App;
