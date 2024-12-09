import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "app/providers/StoreProvider";
import { Article, ArticleSortField } from "entities/Article";
import { getArticlesPageLimit, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort } from "../selectors/articlesPageSelectors";
import { SortOrder } from "shared/types";

interface FetchArticleListProps {
  page?: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkExtraConfig<string>
>("articlePage/fetchArticleList", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = args;
  const limit = getArticlesPageLimit(getState());
  const search = getArticlesPageSearch(getState());
  const sort = getArticlesPageSort(getState());
  const order = getArticlesPageOrder(getState());
  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
