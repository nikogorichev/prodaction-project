import { rtkApi } from "@/shared/api/rtkApi";
import { Rating } from "@/entities/Rating";

type ArticleRatingQuery = {
  userId: string;
  articleId: string;
};

type RateArticleBody = {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
};

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRatingApi: build.query<Array<Rating>, ArticleRatingQuery>({
      query: ({ userId, articleId }) => ({
        url: "/article-ratings",
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleBody>({
      query: (req) => ({
        url: "/article-ratings",
        method: "POST",
        body: req,
      }),
    }),
  }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingApiQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
