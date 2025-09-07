import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";


function App() {

  return (
    <header>
      <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Navigate to="/" replace />} />
        </Routes>
      </SignedIn>

      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </SignedOut>
    </header>
  )
}

export default App;
