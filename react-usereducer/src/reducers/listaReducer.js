const listaReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'delete':
      return state.filter(lista => lista.id !== payload)
    case 'add':
      return [...state, payload]
    case 'update':
        return state.map(lista => lista.id === payload.id ? payload : lista)
    default:
      return state
  }
}

export default listaReducer