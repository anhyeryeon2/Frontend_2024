import React from 'react'
import ExpenseItem from './ExpenseItem'
import { MdSend } from 'react-icons/md'

const ExpenseList =({handleDelete,initialExpenses}) => {
    return (
      <>
      <ul className='list'>
        {initialExpenses.map(expense =>{
          return (
            <ExpenseItem expense={expense} key={expense.id} handleDelete ={handleDelete}/>
          )
        })}
      </ul>
      <button className='btn'>
        목록 지우기
        <MdSend className='btn-icon'/>
      </button>
      </>
    )

}

export default ExpenseList