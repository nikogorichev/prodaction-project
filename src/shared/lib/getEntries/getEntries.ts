type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;
