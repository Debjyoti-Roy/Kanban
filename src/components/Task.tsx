import React from 'react'

interface TaskProps{
    task:any;
    provided:any;
}

export const Task = ({task, provided}:TaskProps) => {
    const {id, name, username, email }=task;
    console.log(name);
    console.log("Hi");
    // const { title, description, priority, deadline, image, alt } = task;
    console.log("The name is", name);
  return (
    <div ref={provided.innerRef}
    {...provided.droppableProps}
    {...provided.dragJandleProps}
    className='w-[250px] cursor-grab bg-white flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4'
    >
        <div className='w-full flex items-start flex-col'>
            <span className='text-[15.5px] font-medium text-[#555]'>{name}</span>
            <span className='text-[15.5px] font-medium text-[#555]'>{username}</span>
            <span className='text-[15.5px] font-medium text-[#555]'>{email}</span>
        </div>
    </div>
  )
}
