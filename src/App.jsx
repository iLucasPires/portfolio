import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

import MenuHambugerProvider from "./Context/HandleMenu";
function App() {
  return (
    <>
      <MenuHambugerProvider>
        <Header />
        <Main />
        <About />
        <Footer />
      </MenuHambugerProvider>
    </>
  );
}

export default App;
