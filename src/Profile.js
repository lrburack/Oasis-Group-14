import EditableField from "./EditableField"
import { useEffect, useState } from 'react'

export default function Profile({uid}) {
    // do some sort of get request to the database with the uid to retrieve information
    const userdata = {
        name: "Bob Johnson",
        username: "testUsername",
        email: "example@gmail.com",
        phone: "123 456 7891"
    }

    const [name, setName] = useState(userdata.name)
    const [email, setEmail] = useState(userdata.email)
    const [phone, setPhone] = useState(userdata.phone)

    const [propertiesHaveChanged, setPropertiesHaveChanged] = useState(false)
    useEffect(() => {
        setPropertiesHaveChanged(
            name !== userdata.name || email !== userdata.email || phone !== userdata.phone
        )
    }, [name, email, phone])

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
                            <EditableField value={name} setValue={setName}/>
                            <EditableField value={email} setValue={setEmail}/>
                            <EditableField value={phone} setValue={setPhone}/>
                            {/* Allow the user to save their changes */}
                            {
                                propertiesHaveChanged ?
                                <button onClick={() => {
                                    console.log(`name: ${name}  email: ${email}  phone: ${phone}`)
                                    window.location.reload()
                                    }}> Save </button>
                                : <div></div>
                            }
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