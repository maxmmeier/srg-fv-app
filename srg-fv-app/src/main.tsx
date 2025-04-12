import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Apply } from "./features/apply/Apply.tsx";
import { Page } from "./Page.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Page header="Hello World">
            <App />
          </Page>
        }
      />
    </Routes>
    <Routes>
      <Route
        path="/antrag"
        element={
          <Page header="Mitgliedsantrag">
            <Apply />
          </Page>
        }
      />
    </Routes>
  </BrowserRouter>,
);
