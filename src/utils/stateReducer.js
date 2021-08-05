export default function stateReducer (state, action) {
    switch(action.type){
        case 'setChildren':{
			return {
				...state,
				children: action.data
			}
		}
        case 'addChild': {
			return {
				...state,
				children: [action.data, ...state.children]
			}
		}

        case 'setWishlists':{
			return {
				...state,
				wishlists: action.data
			}
		}
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
		default: return state
    }
}