import React from 'react'
import './TaskCard.css'
import deleteIcon from'../assets/delete.png'
import Tag from './Tag'


const Taskcard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
      <p className='task_text'>{title}</p>
      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {/* <Tag tagName='HTML'/>
          <Tag tagName='CSS'/>     */}
          {
            tags.map((tag, index) => (
              <Tag key={index} tagName={tag} selected/>
            ))
          }
        </div>

        <div className='task_delete' onClick={() => handleDelete(index)}>
          <img src={deleteIcon}
          className='deleteIcon' 
          alt="delete" />
        </div>
      </div>   
      
    </article>
  )
}

export default Taskcard;
