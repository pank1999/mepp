// "use client";

// import { createContext, useContext, useReducer } from "react";

// const ThemeContext = createContext({});

// const INITIAL_STATE = { darkMode: false };

// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case "Toggle":
//       return { darkMode: !state.darkMode };
//     default:
//       return state;
//   }
// };

// export const ThemeProvider = ({children}) => {
//   const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
//   return (
//     <ThemeContext.Provider value={{ state, dispatch }}>
//     {children}
// </ThemeContext.Provider>
//   );
// };

// export const useThemeContext = () => useContext(ThemeContext);
