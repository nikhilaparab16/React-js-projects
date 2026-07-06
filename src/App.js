import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



const App = ()=>{
    return (
        <main className="main_wrapper">
            <Header />
            <Body />
        </main>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
