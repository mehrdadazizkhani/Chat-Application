import React from "react";
import { ChatArea } from "../components/messenger";

interface HomePageComponent extends React.PropsWithChildren {}

export const HomePage: React.FC<HomePageComponent> = (): JSX.Element => {
  return <ChatArea />;
};
