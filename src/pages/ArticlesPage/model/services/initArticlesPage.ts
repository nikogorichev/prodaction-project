import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../selectors/articlesPageSelectors";
import { articlesPageActions } from "../slices/articlesPageSlice";
import { fetchArticleList } from "./fetchArticlesList";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkExtraConfig<string>
>("articlePage/initArticlesPage", async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const orderFromUrl = searchParams.get("order") as SortOrder;
    const sortFromUrl = searchParams.get("sort") as ArticleSortField;
    const searchFromUrl = searchParams.get("search");
    const typeFromUrl = searchParams.get("type") as ArticleType;

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }

    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }

    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticleList({}));
  }
});
