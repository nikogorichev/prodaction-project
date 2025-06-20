import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";

export const fetchArticleRecommendation = createAsyncThunk<
  Article[],
  void,
  ThunkExtraConfig<string>
>("articleDetails/fetchArticleRecommendation", async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: 4,
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
