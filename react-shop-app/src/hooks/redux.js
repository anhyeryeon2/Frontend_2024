import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch =() => useDispatch();
export const useAppSelector =  useSelector;


// const dispatch = useDispatch();
// //category를 리덕스로 가져오는데, store에 있는거 가져올땐 useSelector
// const category =  useSelector((state) => state.category);