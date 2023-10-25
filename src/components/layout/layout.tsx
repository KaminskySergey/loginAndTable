import { Main } from "./layout.styled";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const route = useRouter();
  console.log(route);
  return (
    <>
      <div>
        {/* <HeaderComponent /> */}
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Layout;
