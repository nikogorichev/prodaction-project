import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleSortField, ArticleView } from "entities/Article";
import { ArticleType } from "entities/Article";
import { SortOrder } from "shared/types";

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  //pagination
  page: number;
  limit: number;
  hasMore: boolean;

  _inited: boolean;

  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType
}
