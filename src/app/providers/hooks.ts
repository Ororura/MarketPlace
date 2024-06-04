import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/providers/reducers";
import { AppDispatch } from "@/app/providers/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
