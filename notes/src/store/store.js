import { createStore } from "redux";
import rootReducer from "./reducer";

const initialState = {
  notes: [
    {
      id: 0,
      name: "Shopping List 1",
      text: "Lorem ipsum dolor sit amet",
      category: "tasks",
      created: "02/01/2001",
    },
    {
      id: 1,
      name: "Shopping List 2",
      text: "Lorem ipsum dolor sit amet",
      category: "random",
      created: "03/01/2001",
    },
  ],
  showCreateNotes: false,
};

const store = createStore(rootReducer, initialState);

export default store;
