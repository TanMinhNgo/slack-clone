import { createContext, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { axiosInstance } from "../lib/axios.tsx";
import { toast } from "react-hot-toast";

const AuthContext = createContext({});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getToken } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        try {
          const token = await getToken();
          if (token) config.headers.Authorization = `Bearer ${token}`;
        } catch (error: any) {
          if (
            error.message?.includes("auth") ||
            error.message?.includes("token")
          ) {
            toast.error("Authentication issue. Please refresh the page.");
          }
          console.error("Error getting token:", error);
        }
        return config;
      },
      (error: Error) => {
        console.error("Axios request error:", error);
        return Promise.reject(error);
      }
    );
    return () => axiosInstance.interceptors.request.eject(interceptor);
  }, [getToken]);

  return (
    <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  );
}
