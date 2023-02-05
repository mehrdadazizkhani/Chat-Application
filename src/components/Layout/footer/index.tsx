import React from "react";

interface FooterProps extends React.PropsWithChildren {}

export const Footer: React.FunctionComponent<
  FooterProps
> = ({}): JSX.Element => {
  return <h6 className="bg-gray-300 w-full h-[50px]">Designed with ❤</h6>;
};
