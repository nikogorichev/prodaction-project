import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import { getArticleDetailsData } from "@/entities/Article/model/selectors/articleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkExtraConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
  const { dispatch, extra, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<Comment>("/comments", {
      articleId: article.id,
      userId: userData.id,
      text,
    });
    if (!response.data) {
      throw new Error();
    }
    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Невалидный комментарий");
  }
});
