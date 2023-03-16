type Action = { type: 'GET'; payload: string } | { type: 'SET'; payload: string };

const filterReducer = (state: string, action: Action): string => {
  switch (action.type) {
    case 'SET':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default filterReducer;
