import React from 'react'
import styles from '../filters-category/FiltersCategory.module.scss'
import CategoryTab from './category-tab/CategoryTab'
import { CategoriesName } from '../../../store/categories/categories.type'

const FiltersCategory = () => {
  return (
    <div className={styles.filter_category}>
        <CategoryTab text={"모두"} CategoryName={CategoriesName.All}/>
        <CategoryTab text={"전자기기"} CategoryName={CategoriesName.Electronics}/>
        <CategoryTab text={"쥬얼리"} CategoryName={CategoriesName.Jewelry}/>
        <CategoryTab text={"남성의류"} CategoryName={CategoriesName.MensClothing}/>
        <CategoryTab text={"여성의류"} CategoryName={CategoriesName.WomensClothing}/>

    </div>
  )
}

export default FiltersCategory