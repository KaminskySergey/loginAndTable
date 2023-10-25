import { ReactNode, ButtonHTMLAttributes } from "react";

export const ButtonDefault = ({
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return <button {...restProps}>{children}</button>;
};
