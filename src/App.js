import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js'

export function App() {
  // [image, setImage] = useState()

  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <button style={{alignContent: "left"}}>
          Go back!!
        </button>
      </div>
      

      <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{display: "flex", flexDirection: "row", gap:"15px"}}>
            {/* Profile image thingy */}
            <div style={{display: "flex", flexDirection: "column"}}>
              <div className="placeholder-profile-pic" onClick={doThing}/>
            </div>

            <div style={{display: "flex", flexDirection: "column"}}>
              {/* Profile info */}
              <div className="profile-info" style={{width:"200px", textAlign:"left"}}>
                  <h1 style={{marginTop: "0px"}}>Profile</h1>
                  <p>Name <span className="edit">edit</span></p>
                  <p>Username</p>
                  <p>Email <span className="edit">edit</span></p>
                  <p>Phone <span className="edit">edit</span></p>
                  <button className="share-cal-button">Share Calendar</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

function doThing()
{
  console.log("hi")
}

export default App;
