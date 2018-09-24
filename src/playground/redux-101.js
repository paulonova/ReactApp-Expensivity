import { createStore } from 'redux';

//Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count})=>({
    type: 'SET',
    count: count
});

const reset = () => ({
    type: 'RESET'
})

const store = createStore((state={count: 0}, action) => {

    switch(action.type){
        
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state;
    }
});


const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({count: 101}));
