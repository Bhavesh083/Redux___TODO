import React,{useState,useRef,useEffect} from 'react';
import './todos.css'; 
import { todoAdd, todoDel , compAdd , compDel } from './Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function App() {   

const dispatch = useDispatch(); 
const lists = useSelector(state => state.lists); 
const clists = useSelector(state => state.cList);
 
const [value, setValue] = useState('');

const changeHandler = (e) =>{
      setValue(e.target.value);
}

var inp = useRef(null);

useEffect(() => {
  inp.current.focus();
}, []);

const addText = (e) =>{               
  e.preventDefault(); 
  if (value!=='') {
    const list = {
      id : Date.now(), 
      isCheck : false,
      value : value, 
    }
    dispatch(todoAdd(list.id,list.isCheck,list.value));
  } 
} 
const delList = (e) =>{
  dispatch(todoDel(e));
}
const checkList = (a,b,c) =>{
  dispatch(todoDel(a));
  dispatch(compAdd(a,b,c))
}
const cdelList = (e)=>{
  dispatch(compDel(e));
}

return (
  <div className='bdy'>
   <div className='addInp'> 
      <h3>Redux TO-DO</h3>
      <div className='inpadd'>
        <input ref={inp} type='text' placeholder='Enter....' onChange={(e)=>changeHandler(e)} />
        <button onClick={(e)=>addText(e)}><i className="fas fa-plus"></i></button>
      </div>
    </div>  
    <div className='unfin'>
          <span>TO-DO</span> 
              {lists.map(list => {
                  return(
                        <div key={list.id} className='field'>  
                            <span className='unfsp'>{list.value}</span> 
                            <div>  
                                <button onClick={()=>delList(list.id)} ><i className="far fa-trash-alt"></i></button>
                                <button onClick={()=>checkList(list.id,list.isCheck,list.value)} ><i className="fas fa-check"></i></button>
                            </div>   
                        </div>
                    )})
                  }
        </div> 
        <div className='fin'>
          <span>Completed</span>
          {clists.map(clist => {
            return(
              <div className='findiv' key={clist.id}>
                  <span>{clist.value}</span>
                  <button onClick={()=>cdelList(clist.id)}><i className="far fa-trash-alt"></i></button>
              </div>
            ) 
          })} 
        </div>
   </div>

  )
}

export default App;
