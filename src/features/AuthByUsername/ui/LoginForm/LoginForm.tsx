import { Button } from "shared/ui/Button/Button";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <input type="text" className={styles.input} />
      <input type="text" className={styles.input} />
      <Button className={styles.loginBtn}>Войти</Button>
    </div>
  );
};
