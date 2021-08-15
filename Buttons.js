import React, { useState, useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"


export const Buttons = () => {
    const [search, setSearch] = useState('')
    

    const { sortTodoName } = useContext(GlobalContext)
    const { sortTodoDate } = useContext(GlobalContext)
    const { showCompleted } = useContext(GlobalContext)
    const { filteredTodos} = useContext(GlobalContext)
    const { todoEntries } = useContext(GlobalContext)

    const handleChange = e => {
        e.preventDefault();

        const filteringTodos = todoEntries.filter(todoEntries => 
            todoEntries.date.includes(search))
        
            filteredTodos(filteringTodos)
            console.log(filteringTodos.date)

    }

    return (
        <div className="btn" id="btn">
           
            <button id="sort-name" onClick={() => sortTodoName(sortTodoName.item)}>Sort List By Name</button>
            <button id="sort-date" onClick={() => sortTodoDate(sortTodoDate.date)}>Sort List By Date Due</button>
            <form onSubmit= {handleChange}>
                <div>
                    <input type="text" name="search-input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Search Filter"/> 
                    <button id="apply-filter">Apply Filter</button>
                </div>
            </form>
            
            <button id="toggle" onClick={() => showCompleted(showCompleted.id)}>Toggle Visibility of Completed Tasks</button>
        </div>
    )
}

export default Buttons