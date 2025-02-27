import { Product, AddAction, RemoveAction, RemoveAllAction, PlusAction, MinusAction } from '../types/cartTypes';

type ListActions = AddAction | RemoveAction | RemoveAllAction | PlusAction | MinusAction

export default function reducer(state: Product[] = [], action: ListActions) {
    
    if(action.type === 'REMOVE_ALL_PRODUCTS_TO_CART') {
        return []
    }

    const indexProd = state.findIndex(item => item.id === action.payload.id)
    
    if(action.type === 'ADD_PRODUCT_TO_CART') {
        if (indexProd !== -1) {
            const newState =  state.map((item, index) =>
              index === indexProd ? { ...item, qtd: item.qtd + 1 } : item
            )
            const newState2 = newState.map((item, index) =>
                index === indexProd ? {...item, value: (Number(item.value) + Number(action.payload.value)).toFixed(2)} : item
            )
            return newState2
            
          } else {
            return [ ...state, action.payload ]
        }
    }
    if(action.type === 'REMOVE_PRODUCT_TO_CART') {
        return state.filter(item => Number(item.id) !== Number(action.payload))
    }
    if(action.type === 'MINUS_PRODUCT_TO_CART') {
                
        if (indexProd !== -1) {
            if(action.payload.qtd > 1 ){
                const newState = state.map((item, index) => 
                    index === indexProd ? {...item, value: (Number(item.value) - Number(action.payload.value) / item.qtd).toFixed(2) } : item
                )
                const newState2 =  newState.map((item, index) =>
                  index === indexProd ? { ...item, qtd: item.qtd - 1 } : item
                )
                return newState2
            } else if(action.payload.qtd === 1 ) {
                return state.filter(item => Number(item.id) !== Number(action.payload.id))
            }
            
          } else {
            return [ ...state, action.payload ]
        }
    }
    if(action.type === 'PLUS_PRODUCT_TO_CART') {
        
        if (indexProd !== -1) {
            const newState = state.map((item, index) => 
                index === indexProd ? {...item, value: (Number(item.value) + Number(action.payload.value) / item.qtd).toFixed(2) } : item
            )
            const newState2 =  newState.map((item, index) =>
              index === indexProd ? { ...item, qtd: item.qtd +1 } : item
            )
            return newState2
            
          } else {
            return [ ...state, action.payload ]
        }
    }

    return state
}