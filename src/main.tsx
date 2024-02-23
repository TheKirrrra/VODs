
import ReactDOM from "react-dom/client";

import "./index.css";
import Index from "./index.tsx";
import { AuthContextProvider } from "./components/AuthContext/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
  <Index/>
  </AuthContextProvider>
);
