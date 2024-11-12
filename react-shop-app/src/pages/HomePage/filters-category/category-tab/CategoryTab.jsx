import React from 'react'
import styles from "../category-tab/categoryTab.module.scss"
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';

const CategoryTab = ({text,CategoryName}) => {
  const dispatch = useAppDispatch();
  //category를 리덕스로 가져오는데, store에 있는거 가져올땐 useSelector
  const category =  useAppSelector((state) => state.category);
  console.log("💥", category);
  
  const getActiveCategory=() =>{
    dispatch(setActiveCategory(CategoryName))
  }
  return (
    <button
    className={CategoryName === category
        ? styles.active_category: styles.category_button
    }
    onClick={getActiveCategory}
>
    {text}
</button>
  )
}

export default CategoryTab