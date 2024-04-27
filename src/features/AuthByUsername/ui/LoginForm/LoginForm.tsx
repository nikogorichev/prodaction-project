import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";

export const LoginForm = memo(() => {
  const dispatch = useDispatch();

  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoadingClick = () => {
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <div className={styles.loginForm}>
      <Text title="Форма авторизации" />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
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
