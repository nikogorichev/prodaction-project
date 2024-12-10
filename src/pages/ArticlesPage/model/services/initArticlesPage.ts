import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../selectors/articlesPageSelectors";
import { articlesPageActions } from "../slices/articlesPageSlice";
import { fetchArticleList } from "./fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkExtraConfig<string>
>("articlePage/initArticlesPage", async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticleList({}));
  }
});
