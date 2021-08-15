// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TODO':
            return{
                ...state,
                todoEntries: state.todoEntries.filter(todoEntries => todoEntries.id !== 
                action.payload)
               
            }

        case 'ADD_TODO':
            return{
               ...state,
               todoEntries: [ action.payload, ...state.todoEntries]
            } 
            
        case 'SORT_TODO_NAME':
            return{
                ...state,
                todoEntries: state.todoEntries.sort((a, b) => a.item > b.item ? 1 : -1)
            }

         case 'SORT_TODO_DATE':
            return{
                ...state,
                todoEntries: state.todoEntries.sort((a, b) => a.date > b.date ? 1 : -1)
            }  
                
        case 'COMPLETE_TODO':
            return{
                 ...state,
                todoEntries: state.completed
            }
        
        case 'FILTER_TODO':
            return{
                ...state,
                todoEntries: state.todoEntries.filter(todoEntries => todoEntries.date === 
                    action.payload)
            
            }
          
        default:
            return state;
    }
}