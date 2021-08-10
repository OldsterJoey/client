export default function stateReducer (state, action) {
    switch(action.type){
		// definiting reducer methods for Children and Child
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

		case 'deleteChild': {
			const updatedChildren = state.children.filter((child) => {
				return child.id !== parseInt(action.data)
			})
			return {
				...state,
				children: updatedChildren
			}
		}
		case 'updateChild': {
			const child = state.children.find((child) => child.id === action.data.id)
			const theRest = state.children.filter((child) => child.id !== action.data.id)
			const updatedChild = Object.assign(child, action.data)
			return {
				...state,
				children: [updatedChild, ...theRest]
			}
		}

		// reducer methods for Wishlists

        case 'setWishlists':{
			return {
				...state,
				wishlists: action.data
			}
		}

		case 'addWishlist': {
			return {
				...state,
				wishlists: [action.data, ...state.wishlists]
			}
		}

	
		case 'deleteWishlist': {
			const updatedWishlists = state.wishlsits.filter((wishlist) => {
				return wishlist.id !== parseInt(action.data)
			})
			return {
				...state,
				wishlists: updatedWishlists
			}
		}
		case 'updateWishlist': {
			const wishlist = state.wishlists.find((wishlist) => wishlist.id === action.data.id)
			const theRest = state.wishlists.filter((wishlist) => wishlist.id !== action.data.id)
			const updatedWishlist = Object.assign(wishlist, action.data)
			return {
				...state,
				wishlists: [updatedWishlist, ...theRest]
			}

		}

		//  reducer for Wishes
        case 'setWishes':{
			return {
				...state,
				wishes: action.data
			}
		}

		case 'addWish': {
			return {
				...state,
				wishes: [action.data, ...state.wishes]
			}
		}

		case 'deleteWish': {
			const updatedWishes = state.wishes.filter((wish) => {
				return wish.id !== parseInt(action.data)
			})
			return {
				...state,
				wishes: updatedWishes
			}
		}
		case 'updateWish': {
			const wish = state.wishes.find((wish) => wish.id === action.data.id)
			const theRest = state.wishes.filter((wish) => wish.id !== action.data.id)
			const updatedWish = Object.assign(wish, action.data)
			return {
				...state,
				wishes: [updatedWish, ...theRest]
			}

		}

		// Recuder for Authorisation
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