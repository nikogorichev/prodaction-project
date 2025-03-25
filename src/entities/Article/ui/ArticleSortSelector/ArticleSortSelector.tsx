import styles from "./ArticleSortSelector.module.scss"
import { ArticleSortField } from "../../model/consts/consts";
import { SortOrder } from "@/shared/types";
import { Select, SelectOption } from "@/shared/ui/Select/Select";

const orderOptions: SelectOption<SortOrder>[] = [
  {
    value: "asc",
    content: "возрастанию",
  },
  {
    value: "desc",
    content: "убыванию",
  },
];

const sortOptions: SelectOption<ArticleSortField>[] = [
  {
    value: ArticleSortField.VIEWS,
    content: "количеству просмотров",
  },
  {
    value: ArticleSortField.TITLE,
    content: "названию",
  },
  {
    value: ArticleSortField.CREATED,
    content: "дате создания",
  },
];

type Props = {
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (sort: ArticleSortField) => void;
  onChangeOrder: (order: SortOrder) => void;
};

export const ArticleSortSelector = (props: Props) => {
  const { sort, order, onChangeOrder, onChangeSort } = props;

  return (
    <div className={styles.articleSortSelectorWrapper}>
      <Select
        label="Сортировать по"
        options={sortOptions}
        onChange={onChangeSort}
        value={sort}
      />
      <Select
        label="по"
        options={orderOptions}
        onChange={onChangeOrder}
        value={order}
      />
    </div>
  );
};
