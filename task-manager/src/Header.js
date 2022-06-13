import React from 'react'
import Button from './Button'

function Header({ title = 'Task Manager', onAdd, showAdd }) {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} />
        </header>
    )
}

export default Header