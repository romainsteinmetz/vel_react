import { createStore} from 'redux';
const { Map } = require('immutable')

const initialState = {
    prod: new Map({}),
    items: []
}


const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_ITEM':
            console.log('add item');
            console.log(payload.prod);

            let item = {
                product: payload.prod
            };
            var newArray = state.items.slice();
            newArray.push(item);

            return {
                ...state,
                prod: payload.prod,
                items: newArray
            };
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store