import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

interface DynamicModuleLoaderProps {
  children: ReactNode;
  name: StateSchemaKey;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  children,
  name,
  reducer,
  removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreManager;
  useEffect(() => {
    store.reducerManager.add(name, reducer);
    dispatch({ type: `@INIT ${name} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      }
    };
  }, []);
  return <>{children}</>;
};
