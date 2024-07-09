import PropTypes from "prop-types";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export function UserProvider({ children }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const notifyFail = (text) => toast.error(text);

  const [user, setUser] = useLocalStorage("user", null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async (sessionExpired) => {
    try {
      const response = await fetch(`${ApiUrl}/user/logout`, {
        credentials: "include", // envoyer / recevoir le cookie à chaque requête
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setUser(null);
        navigate(sessionExpired === true ? "/connexion" : "/");
        if (sessionExpired === true) {
          notifyFail("Votre session a expiré. Veuillez vous reconnecter.");
        }
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
      notifyFail("Une erreur est survenu !");
    }
  };

  const memo = useMemo(
    () => ({ user, setUser, login, logout }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
