import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js'
import useState from "react"
import Calendar from './Calendar.js'

export function App() {
  // [image, setImage] = useState()

  return (
    <div className="App">
      {/* <Profile uid="11111"></Profile> */}
      <Calendar></Calendar>
    </div>
  );
}

export default App;
