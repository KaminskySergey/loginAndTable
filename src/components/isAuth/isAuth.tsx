import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/src/hooks/redux";
import { selectIsAuth } from "@/src/redux/user/selectorUser";
import { useRouter } from "next/navigation";

export const isAuth = (Component: any) => {
  return function IsAuth(props: any) {
    const router = useRouter();
    const auth = useAppSelector(selectIsAuth);
    useEffect(() => {
      if (!auth) {
        return router.push("/auth/login");
      }
    }, [auth, router]);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export const isLogin = (Component?: any) => {
  return function IsLogin(props: any) {
    const router = useRouter();
    const auth = useAppSelector(selectIsAuth);
    useEffect(() => {
      if (auth) {
        return router.push("/");
      }
    }, [auth, router]);

    if (auth) {
      return null;
    }

    return <Component {...props} />;
  };
};
