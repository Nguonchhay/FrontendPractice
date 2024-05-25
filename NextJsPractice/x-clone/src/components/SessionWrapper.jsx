"use client";

import { sessionProvider } from "next-auth/react";

const SessionWrapper = ({children}) => {
  return (
    <sessionProvider>{children}</sessionProvider>
  )
}

export default SessionWrapper;
