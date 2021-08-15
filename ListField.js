import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import { TodoEntries } from "./TodoEntries"

export const ListField = () => {
    const {  todoEntries } = useContext(GlobalContext)


    return (
        <div className="listOfItems" id="listOfItems">
         <ul id="ul-el">
             {todoEntries.map(todoEntries => (<TodoEntries key = { todoEntries.id} todoEntries={todoEntries} /> ))}
         </ul>
        </div>
    )
}

export default ListField