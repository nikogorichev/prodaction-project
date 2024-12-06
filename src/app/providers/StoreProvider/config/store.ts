import {
  CombinedState,
  configureStore,
  DeepPartial,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { scrollSaveReducer } from "features/ScrollSave";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
