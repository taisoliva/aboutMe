import AnimatedImage from "./components/AnimatedImage";
import AnimatedText from "./components/AnimatedText";
import Header from "./components/Header";
import { Main } from "./styles/style";

function App() {
  return (
    <>
      <Header />
      <Main>
        <AnimatedText />
        <AnimatedImage />
      </Main>
    </>
  );
}

export default App;
