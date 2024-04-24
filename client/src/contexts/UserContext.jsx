import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDatabase, setUserDatabase] = useState([]);

  const memo = useMemo(
    () => ({ currentUser, setCurrentUser, userDatabase, setUserDatabase }),
    [currentUser, userDatabase]
  );

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
