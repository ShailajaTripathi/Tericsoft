class Store{
    constructor (reducer,initState){
        this.reducer = reducer; //it's a function
        this.state = initState; //it's an obj
    }
    getState(){
        return this.state;
    }

    dispatch(action){           // dispatch
        this.state = this.reducer(this.state,action);
        }
}
const reducer =(state,{type,payload})=>{ // reducer
    switch(type){
        case "INC_COUNT":    
        return {
            count: state.count + payload,
        }
        case  "DEC_COUNT":    
        return {
            count: state.count + payload,
        }
    default:
        return {};
   
};
}
const init = { count: 0 };

const store = new Store(reducer,init);

console.log(store.getState());

store.dispatch({type:"INC_COUNT",payload:1}); // action
store.dispatch({type:"INC_COUNT",payload:1});
console.log(store.getState());
store.dispatch({type:"DEC_COUNT",payload:1});

console.log(store.getState());