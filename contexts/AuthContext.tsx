import LoginComponent from "@/components/Login";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface User {
  sub: string;
  internalId: number;
  name: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAnonymous: boolean;
  handleLoginSuccess: (userObject: User | "anonymous") => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = Cookies.get("userCredentials");
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
      setIsAnonymous(parsedUser.sub === "anonymous");
    } else {
      setIsAnonymous(true);
    }

    setLoading(false);
  }, []);

  const handleLoginSuccess = (userObject: User | "anonymous") => {
    if (userObject === "anonymous") {
      const anonymousUser: User = {
        sub: "anonymous",
        internalId: 0,
        name: "Visitante",
        given_name: "Visitante",
        family_name: "do Comino",
        email: "visitante@example.com",
        picture: "",
      };
      setUser(anonymousUser);
      setIsAnonymous(true);
      Cookies.set("userCredentials", JSON.stringify(anonymousUser), {
        expires: 1,
      });
    } else {
      setUser(userObject);
      setIsAnonymous(false);
      Cookies.set("userCredentials", JSON.stringify(userObject), {
        expires: 1,
      });
    }

    setIsLoggedIn(true);
    router.push("/");
  };

  const handleLogout = () => {
    Cookies.remove("userCredentials");
    setUser(null);
    setIsAnonymous(true);
    setIsLoggedIn(false);
    router.push("/");
  };

  if (!isLoggedIn && !loading) {
    return <LoginComponent onSuccess={handleLoginSuccess} />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isAnonymous,
        handleLoginSuccess,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
