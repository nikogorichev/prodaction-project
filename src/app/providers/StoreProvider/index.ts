import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore, AppDispatch } from "./config/store";
import {
  StateSchema,
  ReduxStoreManager,
  ThunkExtraArg,
  ThunkExtraConfig,
} from "./config/StateSchema";

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreManager,
  type AppDispatch,
  type ThunkExtraArg,
  type ThunkExtraConfig,
};
