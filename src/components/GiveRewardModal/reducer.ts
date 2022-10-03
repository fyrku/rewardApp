type State = {
  to: string;
  amount: string;
  message: string;
};

type Action =
  | { type: ActionTypes; payload: string }
  | { type: ActionTypes.reset };

export enum ActionTypes {
  setInputTo = 'setInputTo',
  setInputAmount = 'setInputAmount',
  setInputMessage = 'setInputMessage',
  reset = 'reset',
}

const initialState = {
  to: '',
  amount: '',
  message: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.setInputTo:
      return {
        ...state,
        to: action.payload,
      };
    case ActionTypes.setInputAmount:
      return {
        ...state,
        amount: action.payload,
      };
    case ActionTypes.setInputMessage:
      return {
        ...state,
        message: action.payload,
      };
    case ActionTypes.reset:
      return initialState;
    default:
      return state;
  }
};

export { reducer, initialState };
