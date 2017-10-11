export function loginAs(name) {
    return {
        type: 'LOG_IN_AS',
        payload: name
    };
}

export function signUpForCreditCard() {
    return {
        type: 'SIGN_UP_FOR_CREDIT_CARD'
    };
}

export const initialState = {
    loggedInAs: 'Annie',
    isCreditCardHolder: true
};

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case 'LOG_IN_AS': 
        const name = action.payload;
        return Object.assign({}, state, {loggedInAs: name});
      case 'SIGN_UP_FOR_CREDIT_CARD':
      return Object.assign({}, state, { isCreditCardHolder: true });
      default: 
      return state;
    }
}