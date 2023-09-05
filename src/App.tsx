import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import BookingPage from "./pages/BookingPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"> {/* Specify a path for the root Route */}
          <Route index element={<LandingPage />} />
          <Route path="User" element={<BookingPage />} />
          <Route path="Admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
