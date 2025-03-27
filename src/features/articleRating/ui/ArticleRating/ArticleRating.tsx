import { useSelector } from "react-redux";
import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import {
  useGetArticleRating,
  useRateArticle,
} from "../../api/articleRatingApi";

export type ArticleRatingProps = {
  articleId: string;
  className?: string;
};

const ArticleRating = (props: ArticleRatingProps) => {
  const { articleId, className } = props;
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? "",
  });

  const [rateArticleMutation] = useRateArticle();

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  const handleRateArticle = (rate: number, feedback?: string) => {
    try {
      rateArticleMutation({
        articleId,
        userId: userData?.id ?? "",
        rate,
        feedback,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onAccept = (rate: number, feedback?: string) => {
    handleRateArticle(rate, feedback);
  };

  const onCancel = (rate: number) => {
    handleRateArticle(rate);
  };

  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      title="Оцените статью"
      feedbackTitle="Оставьте свой отзыв о статье"
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};

export default ArticleRating;
