import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page/Page";

const ArticleEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return <Page>{isEdit ? "Редактирование статьи" : "Создание статьи"}</Page>;
};

export default ArticleEditPage;
