import { VStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text="Профиль не найден"/>
  }

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
