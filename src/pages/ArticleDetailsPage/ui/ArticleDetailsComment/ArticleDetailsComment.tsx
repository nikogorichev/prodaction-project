import { useDispatch, useSelector } from "react-redux";
import { CommentList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/addCommentForm";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { Suspense } from "react";
import Loader from "@/shared/ui/Loader/Loader";

type Props = {
  id: string;
};

export const ArticleDetailsComment = (props: Props) => {
  const { id } = props;
  const comments = useSelector(getArticleComments.selectAll);
  const dispath = useDispatch();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id));
  }, [id]);

  const onSendComment = (text: string) => {
    dispath(addCommentForArticle(text));
  };

  return (
    <>
      <Text title="Комментарии" size={TextSize.L} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </>
  );
};
