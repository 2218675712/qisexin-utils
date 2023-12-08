declare const useLocalStorageState: <T>(key: string, options?: import("./createUseStorageState").Options<T>) => readonly [T | undefined, (value?: import("./createUseStorageState").SetState<T> | undefined) => void];
export default useLocalStorageState;
