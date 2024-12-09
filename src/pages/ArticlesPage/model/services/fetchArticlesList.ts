import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "app/providers/StoreProvider";
import { Article, ArticleSortField } from "entities/Article";
import { getArticlesPageLimit } from "../selectors/articlesPageSelectors";
import { SortOrder } from "shared/types";

interface FetchArticleListProps {
  page?: number;
  order?: SortOrder;
  sort?: ArticleSortField;
  search?: string;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkExtraConfig<string>
>("articlePage/fetchArticleList", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const {
    page = 1,
    order = "asc",
    sort = ArticleSortField.CREATED,
    search = "",
  } = args;
  const limit = getArticlesPageLimit(getState());
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
