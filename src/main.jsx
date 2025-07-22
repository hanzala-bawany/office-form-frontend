import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Bounce, ToastContainer  } from 'react-toastify';


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <BrowserRouter>

      <App />
      
    </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
  </>
  // </StrictMode>
);
