import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { RootState } from "@/app/providers/reducers";
import { AppDispatch, AppStore } from "@/app/providers/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
