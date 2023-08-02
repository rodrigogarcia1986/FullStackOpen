const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const newGood = {
        ...state,
        good: state.good + 1
      }
      return newGood
    case 'OK':
      const newOK = {
        ...state,
        ok: state.ok + 1
      }
      return newOK
    case 'BAD':
      const newBad = {
        ...state,
        bad: state.bad + 1
      }
      return newBad
    case 'ZERO':
      const newZero = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return newZero
    case 'DO_NOTHING':
      return initialState
    default: return state
  }

}

export default counterReducer
