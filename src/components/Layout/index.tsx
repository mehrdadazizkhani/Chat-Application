import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header/Header";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
