import { ArticleList } from "entities/Article";
import { Text, TextSize } from "shared/ui/Text/Text";
import { VStack } from "shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

export const ArticleRecommendationsList = () => {
  const { data: articles, isLoading } = useArticleRecommendationsList(3);

  if (isLoading) {
    return null;
  }

  return (
    <VStack gap="8">
      <Text title="Рекоммендуем" size={TextSize.L} />
      <ArticleList
        articles={articles ?? []}
        target="_blank"
        isVirtualized={false}
      />
    </VStack>
  );
};
