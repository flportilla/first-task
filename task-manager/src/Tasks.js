import React, { useState } from 'react'
import Task from './Task'

function Tasks({ tasks, onDelete, onToggle }) {
    return (
        <>
            {tasks.map(task =>
                <Task
                    key={task.id}
                    task={task}
                    onDelete={() => onDelete(task.id)}
                    onToggle={onToggle}
                />
            )}
        </>
    )
}
export default Tasks