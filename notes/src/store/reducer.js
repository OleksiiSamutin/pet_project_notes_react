import { ADD_NOTE, SHOW_POPUP} from "./actions"

const initialState = [
    {id:0, name: "Shopping List",text:"Lorem ipsum dolor sit amet", category: "Task",created:"02/01/2001"},
    {id:1, name: "Shopping List",text:"Lorem ipsum dolor sit amet", category: "Random Thoughts",created:"03/01/2001"},
]
export default function rootReducer(state=initialState, action) {
  // debugger
    switch (action.type) {
      case SHOW_POPUP:
        return {...state, showCreateNotes:true}
      case ADD_NOTE:
      debugger
        const prevState = {...state};
        let prevNote = [...prevState.notes]
        prevNote.push(action.note)
        prevState.notes = prevNote;
        return {...prevState, showCreateNotes:false}
      default:
        return state
    }
  }