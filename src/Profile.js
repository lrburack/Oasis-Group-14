import EditableField from "./EditableField"


export default function Profile({uid}) {
    // do some sort of get request to the database with the uid to retrieve information
    const userdata = {
        name: "Bob Johnson",
        username: "testUsername",
        email: "example@gmail.com",
        phone: "123 456 7891"
    }


    return (
        <div>
            <div style={{display: "flex"}}>
                <button className="button" style={{alignContent: "left", margin: "10px"}}>
                View my calendar
                </button>
            </div>
            

            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "row", gap:"15px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        {/* Profile image thingy */}
                        <div className="placeholder-profile-pic" onClick={changepfpui}/>
                    </div>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        {/* Profile info */}
                        <div className="profile-info" style={{width:"200px", textAlign:"left"}}>
                            <h1 style={{marginTop: "0px"}}>Profile</h1>
                            <EditableField value={userdata.name} onclick_fxn={doThing}/>
                            <EditableField value={userdata.email} onclick_fxn={doThing}/>
                            <EditableField value={userdata.phone} onclick_fxn={doThing}/>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

function doThing()
{
    console.log("clicked")
}

export function changepfpui()
{
  console.log("what")
}