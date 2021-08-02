import React, { createContext, useReducer } from "react";

// prepares the dataLayer
export const StateContext = createContext();

// // Wrap our app and provide the data layer
// export const StateProvider = ({ reducer, initialState, children }) => (


//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// // Pull information from the dataLayer
// export const useStateValue = () => useContext(StateContext);

// export default StateProvider;


const StateContextProvider = ({ reducer, initialState, children }) => {

  return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
          {children}
      </StateContext.Provider>
  )
  
}

// Pull information from the dataLayer
// export const useStateValue = () => useContext(StateContext);

export default StateContextProvider;
