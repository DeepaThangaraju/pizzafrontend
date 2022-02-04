//entry point of redux
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addPizzaReducer, getAllPizzasReducer,editPizzaReducer } from "./reducers/pizzaReducers";
import {cartReducer} from "./reducers/cardReducers";
import {getuserorderReducer, placeOrderReducer} from "./reducers/orderReducers"
import { loginUserReducer, registerUserReducer,getAllUsersReducer} from "./reducers/userReducers";
import { saveorderReducer, getAllOrdersReducer } from "./reducers/saveorderReducers";
import { getPizzaByIdReducer } from "./reducers/pizzaReducers";

const finalReducers=combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    saveorderReducer:saveorderReducer,
    getuserorderReducer:getuserorderReducer,
    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    editPizzaReducer:editPizzaReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    getAllUsersReducer:getAllUsersReducer
})

const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[];
const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null
const initialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
};
const composeEnhancer=composeWithDevTools({});

export const store=createStore(finalReducers,initialState,composeEnhancer(applyMiddleware(thunk)))