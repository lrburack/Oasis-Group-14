import edit_button from './edit-button.png'
import { useState } from 'react'
import './EditableField.css'

export default function EditableField({value, setValue})
{
    const [editing, setEditing] = useState(false)
    const [hovering, setHovering] = useState(false)
    const [focused, setFocused] = useState(false)

    return (
        <div>
            <div className={"entire-field"} 
            onClick={() => setEditing(true)} 
            onMouseEnter={() => setHovering(true)} 
            onMouseLeave={() => setHovering(false)}>
                {
                    editing ?
                        <input className={inputClassNames(editing, hovering, focused) + " text-input"}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            type = 'text'
                            value = {value}
                            onChange = {(event) => setValue(event.target.value)}/>
                    : value
                }
                <img className={editButtonClassNames(editing, hovering) + " edit-button"} src={edit_button}/>
            </div>
        </div>
    )
}

function inputClassNames(editing, hovering, focused)
{
    if(focused || hovering )
        return "text-input-active"
    else
        return "text-input-inactive"
}

function editButtonClassNames(editing, hovering)
{
    if(editing || hovering)
        return "edit-button-active"
    else
        return "edit-button-inactive"
}