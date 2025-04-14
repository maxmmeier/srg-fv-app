import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Apply } from "./features/apply/Apply.tsx";
import { Page } from "./Page.tsx";

import i18n from "./i18n.ts";
import "./i18n.ts";

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
      <Route
        path="antrag"
        element={
          <Page header={i18n.t("applyForMembership")}>
            <Apply />
          </Page>
        }
      />
      <Route
        path="*"
        element={
          <Page header="Hello World">
            <App />
          </Page>
        }
      />
    </Routes>
  </BrowserRouter>,
);
