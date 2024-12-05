import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticlePage } from "./fetchNextArticlePage";
import { fetchArticleList } from "./fetchArticlesList";

jest.mock("./fetchArticlesList");

describe("fetchNextArticlePage.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticleList).toBeCalledWith({page: 3})
  });

  test("fetchArticleList not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticleList).not.toHaveBeenCalled()
  });

  test("fetchArticleList not called if isLoading is true", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticleList).not.toHaveBeenCalled()
  });

});
