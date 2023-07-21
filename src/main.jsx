import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalContextProvider} from "./context/Global.jsx";
import GlobalStyle from "./GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </>
);
