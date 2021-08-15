import React, { useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"
export const TodoEntries = ( { todoEntries }) => {
    
    const { deleteTodo } = useContext(GlobalContext)
    
    return (
        <li className = 'loost listedItems ' > { todoEntries.item} <span> Date Due:  { todoEntries.date } </span><button onClick={() => deleteTodo(todoEntries.id)} className="delete-btn">x</button></li>
    )
}


