import { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Detectar si el usuario está logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // limpiar suscripción
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user, "usuario logueado");
      
      return userCredential.user;
    } catch (error) {
      console.error("Error login:", error.code, error.message);
    }
  };

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user, "usuario registrado");
      return userCredential.user;
    } catch (error) {
      console.error("Error register:", error.code, error.message);
    }
  };

  const getIsAdmin = (isAdmin) =>{
    setIsAdmin(isAdmin);
  }

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin, getIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado
export const useAuth = () => useContext(AuthContext);
