import { Comment } from "entities/Comment";

export type ArticleDetailsCommentsSchema = {
  isLoading?: boolean;
  error?: string;
  data?: Comment[];
};
