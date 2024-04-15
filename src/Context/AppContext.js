import { createContext, useEffect, useReducer } from "react";

const AppReducer=(state,action)=>{
     switch(action.type){
        case 'ADD-EXPENSE':
            return{
                ...state,
                expense:[...state.expense, action.payload]
            }
        
        case "DELETE-EXPENSE":
            return{
                ...state,
                expense: state.expense.filter((expense)=> {
                    return expense.id !== action.payload
                }
                )
            }
        case "SET_BUDGET":
            return { ...state, budget: action.payload };    
           
        default:
            return state;
     }
}

const loadState = () => {
      const serializedState = localStorage.getItem('expenseState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);   //MAKE THIS ALL EXPENSES INTO OBJECT
  };

  
  const saveState = (state) => {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('expenseState', serializedState);    
  };
  
const initialState = loadState() || {
    budget:2000,
    expense:[
        {id:12,name:"Shopping",cost:40},
        {id:13,name:"Holiday",cost:400},
        {id:14,name:"Bike-Service",cost:500},
        {id:15,name:"Transportation",cost:700},
        {id:16,name:"Fuel",cost:400},
        {id:17,name:"Child Care",cost:500},
    ]
}


export const AppContext = createContext();

export const AppProvider =(props)=>{
  const [state,dispatch]=useReducer(AppReducer,initialState)

useEffect(() => {
    saveState(state);
  }, [state]);

  return(
    <AppContext.Provider value={{
        ...state,
        dispatch,
    }
    }>
        {props.children}
    </AppContext.Provider>
  )
}