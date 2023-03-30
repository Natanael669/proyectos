const contadorReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return state = 0
    default:
      return state
  }
}
export default contadorReducer