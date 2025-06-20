import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkExtraConfig<string>
>("articleDetails/fetchCommentsByArticleId", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!articleId) {
    return rejectWithValue("error");
  }

  try {
    const response = await extra.api.get<Comment[]>(`/comments`, {
        params: {
            articleId,
            _expand: "user"
        }
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
