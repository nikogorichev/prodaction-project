import { StateSchema } from "app/providers/StoreProvider";

export const getAddCommentFormText = (state: StateSchema) => state.addCommentFormSchema?.text
export const getAddCommentFormError = (state: StateSchema) => state.addCommentFormSchema?.error
