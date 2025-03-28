import React from 'react'

const TaskForm = () => {
  return (
    <div>
        <header className='app_header'>
            <form>
                <input type='text' className='task_input'
                placeholder='Enter your task'/>

                <div className='task_form_bottom_line'>
                    <button className='tag'>HTML</button>
                    <button className='tag'>CSS</button>
                    <button className='tag'>Javascript</button>
                    <button className='tag'>React</button>

                </div>
            </form>
        </header>

    </div>
  )
}

export default TaskForm
