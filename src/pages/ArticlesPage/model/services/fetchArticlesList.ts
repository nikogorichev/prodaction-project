import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "@/app/providers/StoreProvider";
import { Article, ArticleSortField, ArticleType } from "@/entities/Article";
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../selectors/articlesPageSelectors";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";

interface FetchArticleListProps {
  replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkExtraConfig<string>
>("articlePage/fetchArticleList", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const limit = getArticlesPageLimit(getState());
  const search = getArticlesPageSearch(getState());
  const sort = getArticlesPageSort(getState());
  const order = getArticlesPageOrder(getState());
  const page = getArticlesPageNum(getState());
  const type = getArticlesPageType(getState());

  try {
    addQueryParams({ sort, order, search, type });
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
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
