import { Main } from "./layout.styled";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Layout;
