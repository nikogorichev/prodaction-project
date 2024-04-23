import { Button } from "shared/ui/Button/Button";
import styles from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";

export const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <Input type="text" className={styles.input} autoFocus/>
      <Input type="text" className={styles.input} />
      <Button className={styles.loginBtn}>Войти</Button>
    </div>
  );
};
