import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
  loginActions,
  loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { ReduxStoreManager } from "app/providers/StoreProvider";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(() => {
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
