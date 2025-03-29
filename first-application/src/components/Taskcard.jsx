import React from 'react'
import './TaskCard.css'
import deleteIcon from'../assets/delete.png'
import Tag from './Tag'

const Taskcard = () => {
  return (
    <article className='task_card'>
      <p className='task_text'>This is Sample Text.</p>

      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          <Tag tagName='HTML'/>
          <Tag tagName='CSS'/>    
        </div>

        <div className='task_delete'>
          <img src={deleteIcon}
          className='deleteIcon' 
          alt="delete" />
        </div>
      </div>   
      
    </article>
  )
}

export default Taskcard;
