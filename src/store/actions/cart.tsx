export function addProductsToCart(product: string) {
    return{
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}

export function removeProductsToCart(id: number) {
    return{
        type: 'REMOVE_PRODUCT_TO_CART',
        payload: id
    }
}

export function removeAllProductsToCart(id: number) {
    return{
        type: 'REMOVE_ALL_PRODUCTS_TO_CART',
        payload: id
    }
}

export function minusProducts(id: number) {
    return{
        type: 'MINUS_PRODUCT_TO_CART',
        payload: id
    }
}

export function plusProducts(id: number) {
    return{
        type: 'PLUS_PRODUCT_TO_CART',
        payload: id
    }
}