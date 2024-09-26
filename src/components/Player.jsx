import { useState } from "react"


export default function Player({ initalName, symbol , isActive}) {
   const [playerName , setPlayerName] = useState(initalName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }
    let  editPlayerName = <span className='player-name'>{playerName}</span>

    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }

    if(isEditing){
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editPlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}