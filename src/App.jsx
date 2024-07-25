import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/body/Sidebar'
import Notes from './Components/Notes/Notes';
import Reminders from './Components/Reminders/Reminders';
import Archive from './Components/Archive/Archive';
import Trash from './Components/Trash/Trash';
import Header from './Components/Header/Header';
import CreateNote from './Components/CreateNote/CreateNote';

const App = () => {
  return (
    <>
      <Header />
      <CreateNote />
      
      <Routes>
        <Route path="/notes" component={<Notes />} />
        <Route path="/reminders" component={<Reminders />} />
        <Route path="/archive" component={<Archive />} />
        <Route path="/trash" component={<Trash />} />
      </Routes>

    </>
  );
};

export default App;