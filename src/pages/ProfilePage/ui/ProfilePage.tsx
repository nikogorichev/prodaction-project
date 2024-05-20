import { profileReducer } from "entities/Profile";
import { memo, useEffect, useState } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>Страница профиля</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
