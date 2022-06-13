import React from 'react'
import Button from './Button'

function Header({ title = 'Task Manager' }) {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button />
        </header>
    )
}

export default Header