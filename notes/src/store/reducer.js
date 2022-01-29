
const initialState = [
    {id:0, name: "Shopping List",text:"Lorem ipsum dolor sit amet", category: "Task",created:"02/01/2001"},
    {id:1, name: "Shopping List",text:"Lorem ipsum dolor sit amet", category: "Random Thoughts",created:"03/01/2001"},
]
export default function rootReducer(state=initialState, action) {
    switch (action.type) {
      default:
        return state
    }
  }