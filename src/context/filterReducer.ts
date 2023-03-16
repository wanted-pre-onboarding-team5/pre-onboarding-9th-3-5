type Action = { type: 'GET'; payload: string } | { type: 'SET'; payload: string };

const filterProvider = (state: string, action: Action): string => {
  switch (action.type) {
    case 'GET':
      return state;
    case 'SET':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default filterProvider;
