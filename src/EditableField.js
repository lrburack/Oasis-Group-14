import edit_button from './edit-button.png'
import { useState } from 'react'
import './EditableField.css'
import { useRef } from 'react'

export default function EditableField({value, onclick_fxn})
{
    const [editing, setEditing] = useState(false)
    const [hovering, setHovering] = useState(false)
    const [focused, setFocused] = useState(false)
    const input_element = useRef(null)

    return (
        <div>
            <div className={"entire-field"} 
            onClick={() => setEditing(true)} 
            onMouseEnter={() => setHovering(true)} 
            onMouseLeave={() => setHovering(false)}>
                {
                    editing ?
                        <input className={inputClassNames(editing, hovering, focused)}
                            onFocus={setFocused(true)}
                            onBlur={setFocused(false)}
                            ref={input_element}
                            type = 'text'/>
                    : value
                }
                <img className={editButtonClassNames(editing, hovering)} src={edit_button}/>
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