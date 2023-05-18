import { useState } from 'react';
function AddSong(){

    const [inputSong, setInputSong] = useState("");
    
    const handleChange = (event) => {
        setInputSong(event.target.value)
    }

    const handleSubmitSong =  (event) => {
        event.preventDefault();
        alert("Dodao si pesmu");
    }
    
    return (
        <form>
            <input type='text' value={inputSong} onChange={handleChange} />
            <input type="submit" value='Dodaj pesmu' onClick={ handleSubmitSong }/>
        </form>
    )
}

export default AddSong;