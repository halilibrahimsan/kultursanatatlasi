import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import PublicProfile from "./pages/PublicProfile";
import NotFound from "./pages/NotFound";

// Profiles live at /@username. React Router can't match a partial segment, so check the prefix here.
function HandleRoute() {
  const { handle = "" } = useParams();
  return handle.startsWith("@") && handle.length > 1 ? <PublicProfile /> : <NotFound />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/signup" element={<Auth mode="signup" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:handle" element={<HandleRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
