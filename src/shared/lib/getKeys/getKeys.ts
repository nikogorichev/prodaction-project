
type Keys<T> = Array<keyof T>;

export const getKeys = <T extends object>(obj: T): Keys<T> =>
  Object.keys(obj) as Keys<T>;