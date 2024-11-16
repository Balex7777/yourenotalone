import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return <main className={styles.main}>{children}</main>;
}
