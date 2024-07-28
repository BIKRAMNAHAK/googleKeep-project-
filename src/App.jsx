import { Route, Routes } from 'react-router-dom';
import Reminders from './Components/Reminders/Reminders';
import Archive from './Components/Archive/Archive';
import Trash from './Components/Trash/Trash';
import Header from './Components/Header/Header';
import CreateNote from './Components/CreateNote/CreateNote';
import ViewNotes from './Components/ViewNotes/ViewNotes';
import Singup from './Components/Signup/Singup';
import Login from './Components/Login/Login';


const App = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<CreateNote /> }/>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/view" lement={<ViewNotes />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>

    </>
  );
};

export default App;