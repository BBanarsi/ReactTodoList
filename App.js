
import './App.css';
import { Header } from "./components/Header"
import { InputFields } from "./components/InputFields.js"
import { Buttons } from "./components/Buttons"
import { ListField } from "./components/ListField"

import { GlobalProvider } from "./context/GlobalState"


function App() {
  return (
    <GlobalProvider >
        <Header />
        <InputFields />
        <Buttons />  
        <ListField />
    </GlobalProvider>
  );
}

export default App;
