import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { GOOGLE_CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

export interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextProps {
  userData: UserProps;
  signIn: () => Promise<void>;
  isUserLoading: boolean;
}

interface AuthProviderParams {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }: AuthProviderParams) => {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [accessToken, setAccessToken] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["profile", "email"],
  });

  const signIn = async () => {
    try {
      setIsUserLoading(true);
      await promptAsync();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  };
  console.log("-------------------");
  console.log(accessToken);

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken)
      setAccessToken(response.authentication?.accessToken);
  }, [response]);
  return (
    <AuthContext.Provider
      value={{
        signIn,
        userData,
        isUserLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  return context;
};
