import { Fragment, ReactNode } from "react";
import Header from "./header/header";

type LayoutPropTypes = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutPropTypes) => {
  return (
    <Fragment>
      <Header />
      <main className="content">{children}</main>
    </Fragment>
  );
};

export default Layout;
