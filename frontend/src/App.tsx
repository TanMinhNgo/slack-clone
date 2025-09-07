import { useAuth } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CallPage from "./pages/CallPage";
import * as Sentry from "@sentry/react";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SentryRoutes>
        <Route path="/" element={isSignedIn ? <HomePage /> : <Navigate to="/auth" replace />} />
        <Route path="/auth" element={isSignedIn ? <Navigate to="/" replace /> : <AuthPage />} />

        <Route path="/call/:id" element={isSignedIn ? <CallPage /> : <Navigate to="/auth" replace />} />

        {/* Redirect any unknown routes to the appropriate page based on authentication status */}
        <Route path="*" element={isSignedIn ? <Navigate to="/" replace /> : <Navigate to="/auth" replace />} />
      </SentryRoutes>
    </div>
  );
}

export default App;

/* <SignedIn>
<SentryRoutes>
<Route path="/" element={<HomePage />} />
<Route path="/auth" element={<Navigate to="/" replace />} />
</SentryRoutes>
</SignedIn>

<SignedOut>
<SentryRoutes>
<Route path="/auth" element={<AuthPage />} />
<Route path="*" element={<Navigate to="/auth" replace />} />
</SentryRoutes>
</SignedOut> */
