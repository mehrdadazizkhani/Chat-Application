import React from "react";

interface MessengerLayoutProps extends React.PropsWithChildren {}

export const MessengerLayout: React.FunctionComponent<MessengerLayoutProps> = ({
  children,
}): JSX.Element => {
  return <section>{children}</section>;
};
