import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

   


export const InputFields = () => {
    const [item, setItem] = useState('')
    const [date, setDate] = useState('')

    const { addTodo } = useContext(GlobalContext)
    
    const onSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 10000000),
            item, 
            date
        }

        addTodo(newTodo)

    }
    return (
        <form onSubmit = {onSubmit}>
            <div className="input" id="input">
                <input type="text" name="task-input" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Enter Task"/>
                <input type="text" name="tate-input" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter Date Due (mm/dd/yy)"/>

            </div>
            <button id="submit-btn">Submit</button>
        </form>
        
    )
}

export default InputFields

