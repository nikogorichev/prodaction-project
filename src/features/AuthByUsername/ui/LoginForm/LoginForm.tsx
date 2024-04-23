import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { LoginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";

export const LoginForm = memo(() => {
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(LoginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(LoginActions.setPassword(value));
    },
    [dispatch]
  );

  const loginForm = useSelector(getLoginState);

  return (
    <div className={styles.loginForm}>
      <Input
        type="text"
        className={styles.input}
        onChange={onChangeUsername}
        value={loginForm.username}
        placeholder="username"
      />
      <Input
        type="text"
        className={styles.input}
        onChange={onChangePassword}
        value={loginForm.password}
        placeholder="password"
      />
      <Button theme={ThemeButton.OUTLINE} className={styles.loginBtn}>
        Войти
      </Button>
    </div>
  );
});

LoginForm.displayName = "LoginForm";
