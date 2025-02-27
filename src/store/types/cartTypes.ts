export type Product = {
    id: number;
    name: string;
    value: string;
    qtd: number;
};

export type AddAction = {
    type: 'ADD_PRODUCT_TO_CART';
    payload: {
        id: number;
        name: string;
        value: string;
    };
};

export type RemoveAction = {
    type: 'REMOVE_PRODUCT_TO_CART';
    payload: {
        id: number;
    };
};
export type MinusAction = {
    type: 'MINUS_PRODUCT_TO_CART';
    payload: {
        id: number;
        name: string;
        value: string;
        qtd: number;
    };
};

export type PlusAction = {
    type: 'PLUS_PRODUCT_TO_CART';
    payload: {
        id: number;
        name: string;
        value: string;
        qtd: number;
    };
};

export type RemoveAllAction = {
    type: 'REMOVE_ALL_PRODUCTS_TO_CART';
    payload: []
    
};
