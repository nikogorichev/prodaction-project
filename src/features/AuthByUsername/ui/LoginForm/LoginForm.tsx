import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { LoginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";

export const LoginForm = memo(() => {
  const dispatch = useDispatch();

  const { username, password, error, isLoading } = useSelector(getLoginState);

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

  const onLoadingClick = () => {
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <div className={styles.loginForm}>
      {error && <div>{error}</div>}
      <Input
        type="text"
        className={styles.input}
        onChange={onChangeUsername}
        value={username}
        placeholder="username"
      />
      <Input
        type="text"
        className={styles.input}
        onChange={onChangePassword}
        value={password}
        placeholder="password"
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoadingClick}
        disabled={isLoading}
      >
        Войти
      </Button>
    </div>
  );
});

LoginForm.displayName = "LoginForm";
