"use client";

import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

//define type of the context. This will be the types for the values that the context consumers will be receiving when they call useContext() (or our custom hook that calls useContext)
type ExampleContext = {
    someStateValue: string;
    setSomeStateValue: Dispatch<SetStateAction<string>>;
};

/**
 * First we need to create the context. We set default value to null because technically we dont know if whatever is trying to consume our context is actually a child of the context provider.
 */
const ExampleContext = createContext<ExampleContext | null>(null);

/**
 * Create a context provider so we can wrap the parts of the app that will be consuming the context (in this example i wrapped the children of the root layout.tsx file which should contain basically the entire app)
 *
 * @param children
 * @constructor
 */
export default function ExampleContextProvider({children}: Readonly<{ children: ReactNode }>) { //can also use a type like "ExampleContextProviderProps" to make the arguments here more explicit and if you wanted to pass in another value besides only children
    //define values that will be shared with context consumers, in this case some state value
    const [someStateValue, setSomeStateValue] = useState('hi');

    const contextValues = {
        someStateValue,
        setSomeStateValue
    };

    return (
      <ExampleContext.Provider value={contextValues}>
          {children}
      </ExampleContext.Provider>
    );
}

/**
 * Create a custom hook to check whether the context exists. It wouldnt exist if this hook is being used in a component that is not a child of the ExampleContextProvider.
 */
export function useExampleContext() {
    const context = useContext(ExampleContext);
    if (!context) {
        throw new Error("useExampleContext must be used with a ExampleContextProvider")
    }

    return context;
}