import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Apply from './features/apply/Apply.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes><Routes>
      <Route path="/antrag" element={<Apply />} />
    </Routes>
  </BrowserRouter>
)
