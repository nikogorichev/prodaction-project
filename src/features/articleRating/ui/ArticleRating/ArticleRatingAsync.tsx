import { lazy, Suspense } from "react";
import { ArticleRatingProps } from "./ArticleRating";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

const ArticleRatingLazy = lazy(() => import("./ArticleRating"));

// выносим в ленивую загрузку, чтобы не подгружать компонент до тех пор, пока пользователь его не проскроллит. Оптимизируем наше приложение
export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
