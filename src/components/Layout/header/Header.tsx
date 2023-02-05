import React from "react";

interface HeaderProps extends React.PropsWithChildren {}

export const Header: React.FunctionComponent<HeaderProps> = (): JSX.Element => {
  return (
    <h2 className="self-start w-full bg-slate-600 font-bold uppercase h-[50px]">
      Telegram Web App
    </h2>
  );
};
