import React from "react";

interface IContext {
  isActive: boolean;
}

export const Context = React.createContext<IContext>({ isActive: false });
