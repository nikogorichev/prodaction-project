import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "app/providers/StoreProvider";
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from "../selectors/articlesPageSelectors";
import { articlesPageActions } from "../slices/articlesPageSlice";
import { fetchArticleList } from "./fetchArticlesList";

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkExtraConfig<string>
>("articlePage/fetchNextArticlePage", async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const hasMore = getArticlesPageHasMore(getState());
  const page = getArticlesPageNum(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(
      fetchArticleList({
        page: page + 1,
      })
    );
  }
});
