export const todoState = { 
    lists : [], 
    cList : [],
}     
 
const reducer = (state = todoState, action) => {  
    switch (action.type) { 
        case 'Add':  
            return { 
                ...state, 
                lists : [...state.lists,action.lists] 
            }   
        case 'Cadd':  console.log(action.lists)
            return { 
                ...state,
                cList : [...state.cList,action.lists]
            }   
        case 'Del':   
                const newLists = state.lists; 
                const ind = state.lists.findIndex(list => list.id === action.lists.id);
                if(ind >= 0){ 
                    newLists.splice(ind,1) 
                }else{   
                }   
            return {  
            ...state,  
            lists : [...newLists],
        }  
        case 'Cdel':   
                 const newcList = state.cList; 
                 const indo = state.cList.findIndex(list => list.id === action.lists.id);
                 if(indo >= 0){ 
                    newcList.splice(indo,1) 
                }else{   
                }  
            return {  
            ...state,  
            cList : [...newcList],
        }  
        default:
            return state;
    }
}
export default reducer;
