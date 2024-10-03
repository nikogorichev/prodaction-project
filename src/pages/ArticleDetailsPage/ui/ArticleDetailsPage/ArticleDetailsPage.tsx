import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text="Статья не найдена" />;
  }
  
  return <ArticleDetails id={id} />;
};

export default ArticleDetailsPage;
