import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect, useMemo } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [currentUser, setCurrentUser] = useState(null);

  const isUserConnected = async () => {
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(`${ApiUrl}/user/is-connected`, {
        credentials: "include", // envoyer / recevoir le cookie à chaque requête
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setCurrentUser(true);
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
        setCurrentUser(null);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(`${ApiUrl}/user/logout`, {
        credentials: "include", // envoyer / recevoir le cookie à chaque requête
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setCurrentUser(null);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  useEffect(() => {
    isUserConnected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memo = useMemo(
    () => ({ currentUser, setCurrentUser, logout }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
