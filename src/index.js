import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseEffects1 from "./useEffects";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <UseEffects1 />
  </StrictMode>
);
