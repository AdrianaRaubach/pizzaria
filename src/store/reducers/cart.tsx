type Product = {
    id: number;
    name: string;
    value: string;
    qtd: number;
};

type AddAction = {
    type: 'ADD_PRODUCT_TO_CART';
    payload: {
        product: Product;
    };
};

type RemoveAction = {
    type: 'REMOVE_PRODUCT_TO_CART';
    payload: {
        id: number;
    };
};
type MinusAction = {
    type: 'MINUS_PRODUCT_TO_CART';
    payload: {
        product: Product;
    };
};

type PlusAction = {
    type: 'PLUS_PRODUCT_TO_CART';
    payload: {
        product: Product;
    };
};


type RemoveAllAction = {
    type: 'REMOVE_ALL_PRODUCTS_TO_CART';
    payload: {
        id: number;
    };
};

type ListActions = AddAction | RemoveAction | RemoveAllAction | PlusAction | MinusAction

export default function reducer(state: Product[] = [], action: ListActions) {

    if(action.type === 'ADD_PRODUCT_TO_CART') {

        const indexProd = state.findIndex(item => item.id === action.payload.id)
        
        if (indexProd !== -1) {
            const newState =  state.map((item, index) =>
              index === indexProd ? { ...item, qtd: item.qtd + 1 } : item
            )
            const newState2 = newState.map((item, index) => 
                index === indexProd ? {...item, value: (Number(item.value) + Number(action.payload.value)).toFixed(2) } : item
            )
            return newState2
            
          } else {
            return [ ...state, action.payload ]
        }
    }
    if(action.type === 'REMOVE_PRODUCT_TO_CART') {
        return state.filter(item => item.id !== action.payload)
    }
    if(action.type === 'REMOVE_ALL_PRODUCTS_TO_CART') {
        return []
    }
    if(action.type === 'MINUS_PRODUCT_TO_CART') {
        console.log(action)
        return state
    }
    if(action.type === 'PLUS_PRODUCT_TO_CART') {
        console.log(action)
        return state
    }

    return state
}