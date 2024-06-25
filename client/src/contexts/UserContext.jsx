import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const memo = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
