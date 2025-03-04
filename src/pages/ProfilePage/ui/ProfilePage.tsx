import { profileReducer } from "entities/Profile";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { VStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page>
        <VStack gap="16" max>
          <ProfilePageHeader />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
