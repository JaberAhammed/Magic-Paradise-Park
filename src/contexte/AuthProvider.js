import { createContext } from "react";
import useCart from "../hooks/useCart";
import useCourses from "../hooks/useCourses";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase();
    const  {courses,}= useCourses();
    const { addToCart,selectedCourse,remove } = useCart();

    const data = {
        AllContexts,
        courses,
        addToCart,
        selectedCourse,
        remove
      };
    

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;