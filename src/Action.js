export const todoAdd = (id,ischeck,value) => ({
    type : 'Add',
    lists : {
        id    : id,
        isCheck : ischeck, 
        value : value,  
     }  
})  

export const compAdd = (id,ischeck,value) => ({
    type : 'Cadd',
    lists : {
        id    : id,
        isCheck : ischeck,
        value : value,  
     }  
})  

export const todoDel = (id) => ({
    type : 'Del',
    lists : {
        id    : id, 
    }
})   

export const compDel = (id) => ({
    type : 'Cdel',
    lists : {
        id    : id, 
    }
})   