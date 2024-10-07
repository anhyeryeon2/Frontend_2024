import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import { MdSend } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
      <>
      <ul className='list'>
        <ExpenseItem/>
      </ul>
      <button className='btn'>
        목록 지우기
        <MdSend className='btn-icon'/>
      </button>
      </>
    )
  }
}

export default ExpenseList