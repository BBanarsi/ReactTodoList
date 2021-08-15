import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

//initial state
const initialState = {

    todoEntries: [
        { id: 1, item: "Clean Bedroom", date: "05/08/21" },
        { id: 2, item: "Do homework", date: "05/09/21" },
        { id: 3, item: "Go to sleep", date: "05/10/21" },

    ]

}

//crete Context
export const GlobalContext = createContext(initialState);

//Provider Componenet
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
   

    //actions
    function deleteTodo(id) {
        
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }


    function addTodo(date) {
        dispatch({
            type: 'ADD_TODO',
            payload: date
        })
    }

    function sortTodoName(todoEntries) {
        dispatch({
            type: 'SORT_TODO_NAME',
            payload: todoEntries
        })
    }

    function sortTodoDate(todoEntries) {
        dispatch({
            type: 'SORT_TODO_DATE',
            payload: todoEntries
        })
    }

    function showCompleted(id) {
        dispatch({
            type: 'COMPLETE_TODO',
            payload: id
        })
    }

   function filteredTodos(date){  
    
       dispatch({
           type: 'FILTER_TODO',
           payload: date
       })
   
    }


    return (<GlobalContext.Provider value={{
        todoEntries: state.todoEntries,
        deleteTodo,
        addTodo,
        sortTodoName,
        sortTodoDate,
        showCompleted,
        filteredTodos
    }}>
        { children }

    </GlobalContext.Provider>)

}