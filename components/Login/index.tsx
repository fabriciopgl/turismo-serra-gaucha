import { Button } from "@nextui-org/react";
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";
import { FaUser, FaWineGlassAlt } from "react-icons/fa";
import waterfall from "../../public/images/backgrounds/waterfall_background.jpg";
import { GoogleIcon } from "./GoogleIcon";

interface LoginComponentProps {
  onSuccess: (userObject: any) => void;
}

interface ExtendedJwtPayload extends JwtPayload {
  internalId?: number;
}

export default function LoginComponent({ onSuccess }: LoginComponentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //This variables was previous set in environment variables on GitHub (only for production)
  // For development, you need to specify the value in .env.development
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_USER_SCRIPT_URL!;

  useEffect(() => {
    const handleCredentialResponse = async (response: any) => {
      const userObject = jwtDecode<ExtendedJwtPayload>(response.credential);

      try {
        const internalUserId = await sendUserData(userObject);
        userObject.internalId = internalUserId;
        onSuccess(userObject);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    };

    const sendUserData = async (userData: any) => {
      try {
        const response = await axios.post(scriptUrl, userData, {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        });
        return Number(response.data);
      } catch (error) {
        console.error("Error sending data to Google Apps Script:", error);
      }
    };

    const initializeGoogleSignIn = () => {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_out: true,
      });

      window.google.accounts.id.disableAutoSelect();

      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [googleClientId, onSuccess, scriptUrl]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Background"
        src={waterfall.src}
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />

      {/* Conteúdo principal */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 z-10">
        {/* Cabeçalho com ícone */}
        <div className="absolute top-4 left-4 flex items-center text-xl font-semibold text-gray-700 p-2">
          <FaWineGlassAlt className="text-2xl mr-2" />
          <span style={{ fontFamily: "'Lustria', sans-serif" }}>Comino</span>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-24">
            <div className="w-10 h-10 border-t-2 border-blue-500 border-solid rounded-full animate-spin" />
          </div>
        ) : (
          // Caso contrário, mostrar o conteúdo original
          <>
            <Button
              variant="bordered"
              startContent={<GoogleIcon />}
              className="w-full py-2 hover:bg-blue-50 hover:bg-opacity-80 border-[1px] border-[#dadce0] text-sm rounded-md flex justify-center items-center relative cursor-pointer mt-10"
              onClick={() => {
                setIsLoading(true);
                window.google.accounts.id.prompt();
              }}
            >
              {/* Botão do Google invisível */}
              <div
                id="signInDiv"
                className="absolute inset-0 w-full h-full"
                style={{
                  zIndex: 1,
                  opacity: 0, // Torna invisível
                  pointerEvents: "auto", // Permite clique programático
                }}
              />
              {/* Botão customizado visível */}
              <span
                className="flex-1 text-center z-0"
                style={{
                  fontFamily: "'Google Sans', Arial, sans-serif",
                }}
                onClick={() => {
                  setIsLoading(true);
                }}
              >
                Entrar com Google
              </span>
            </Button>

            {/* Separador */}
            <div className="flex items-center my-6">
              <hr className="flex-1 border-t border-gray-300" />
              <span className="mx-4 text-gray-500">ou</span>
              <hr className="flex-1 border-t border-gray-300" />
            </div>

            {/* Botão para acessar sem login */}
            <Button
              startContent={<FaUser />}
              onClick={() => {
                setIsLoading(true);
                onSuccess("anonymous");
              }}
              variant="bordered"
              className="w-full py-2 hover:bg-blue-50 hover:bg-opacity-80 border-[1px] border-[#dadce0] text-sm rounded-md"
              style={{
                fontFamily: "'Google Sans', Arial, sans-serif",
              }}
            >
              <span className="flex-1 text-center">
                Acessar sem fazer login
              </span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
