import { ReactNode } from "react";

import Header from "../components/Navbar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Header />
      <div className="h-full w-full bg-white dark:bg-black bg-center bg-cover bg-no-repeat flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Layout;