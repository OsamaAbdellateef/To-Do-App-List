export const listReducer = (state , action) => {
  switch (action.type) {
    case "ADD_TASK":
        console.log(state);
        console.log('payload - >>> ' , action.do);
        return [...state, {do:action.text , date:action.date, time:action.time, id:Math.random()}]
    case "DELETE_TASK":
        return state.filter(task => task.id !== action.payload)
    default:
      return state;
  }
};
