import { Main } from "./layout.styled";


const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <div>
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Layout;
