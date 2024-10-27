import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AddCommentForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import { useSelector } from "react-redux";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export type AddCommentFormProps = {
  className?: string;
  onSendComment: (text: string) => void
};

const reducersList: ReducersList = {
  addCommentFormSchema: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const dispath = useAppDispatch();
  const textValue = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = (value: string) => {
    dispath(addCommentFormActions.setText(value));
  };

  const onSendHandler = () => {
    textValue && onSendComment(textValue)
    onCommentTextChange("")
  }

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <div className={classNames(styles.wrapper, {}, [className])}>
        <Input
          placeholder="Введите текст комментария"
          value={textValue}
          onChange={onCommentTextChange}
          className={styles.input}
        />
        <Button onClick={onSendHandler}>Отправить</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
