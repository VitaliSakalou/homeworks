import { combineReducers } from 'redux';


  import ProductsReducer from "../components/ListOfFood/ListOfFoodReducer";

let combinedReducer=combineReducers({
    // редьюсер showProductsReducer отвечает за раздел state под именем showProduct
     Product: ProductsReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
