import { AddAction, RemoveAction, PlusAction, MinusAction } from '../types/cartTypes';

export function addProductsToCart(product: AddAction) {
    return{
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}

export function removeProductsToCart(product: RemoveAction) {
    return{
        type: 'REMOVE_PRODUCT_TO_CART',
        payload: product
    }
}

export function removeAllProductsToCart(product: []) {
    return{
        type: 'REMOVE_ALL_PRODUCTS_TO_CART',
        payload: product
    }
}

export function minusProducts(product: MinusAction) {
    return{
        type: 'MINUS_PRODUCT_TO_CART',
        payload: product
    }
}

export function plusProducts(product: PlusAction) {
    return{
        type: 'PLUS_PRODUCT_TO_CART',
        payload: product
    }
}