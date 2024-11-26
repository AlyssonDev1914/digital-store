import Header from "../src/componets/header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  )
}
export default App;