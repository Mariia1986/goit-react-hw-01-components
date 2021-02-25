
import './App.css';
import Profile from './components/Profile/Profile'
import users from './db/users.json'


function App() {
  return (
    <div className="App">
     <Profile users={users}/>
    </div>
  );
}

export default App;
