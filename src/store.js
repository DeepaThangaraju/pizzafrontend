//entry point of redux
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import {cartReducer} from "./reducers/cardReducers";
import {placeOrderReducer} from "./reducers/orderReducers"
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";

const finalReducers=combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer
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