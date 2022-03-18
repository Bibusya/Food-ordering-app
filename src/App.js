import react from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/UI/Card.js";
function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
