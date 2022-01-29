import logo from './logo.svg';
import './App.css';
import Row from './components/Row'
import AddNotePopup from './components/AddNotePopup/addNotePopup';
import NotesTable from './components/NotesTable';
import CategoryTable from './components/CategoryTable'

function App() {
  return (
    <div className="main">
        <AddNotePopup/>
        <NotesTable/>

        <CategoryTable categories={[{categoryName:'Task',icon:'tasks'},
        {categoryName:'Idea',icon:'ideas'},
        {categoryName:'Random Thoughts',icon:'random'}]}/>
    </div>
  );
}

export default App;
