import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./Context/AdminContext.jsx";
import JobContextProvider from "./Context/JobContext.jsx";
import AppContextProvider from "./Context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <JobContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </JobContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
