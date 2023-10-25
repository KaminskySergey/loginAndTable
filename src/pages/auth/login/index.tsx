import { isLogin } from "@/src/components/isAuth/isAuth";
import Layout from "@/src/components/layout/layout";
import { LoginComponent } from "@/src/components/login/login";

const LoginPage = () => (
  <Layout>
    <LoginComponent />
  </Layout>
);

export default isLogin(LoginPage);
