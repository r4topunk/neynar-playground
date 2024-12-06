"use client";

import { NeynarContextProvider, Theme } from "@neynar/react";
import React, { ReactNode } from "react";
import "@neynar/react/dist/style.css";

interface NeynarProviderProps {
  children: ReactNode;
}

const NeynarProvider: React.FC<NeynarProviderProps> = ({ children }) => {
  return (
    <NeynarContextProvider
      settings={{
        clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || "",
        defaultTheme: Theme.Light,
        eventsCallbacks: {
          onAuthSuccess: () => {},
          onSignout() {},
        },
      }}
    >
      {children}
    </NeynarContextProvider>
  );
};

export default NeynarProvider;
