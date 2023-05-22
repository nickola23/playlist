import { useState } from 'react';

function SongList(){

    const songs = [
        {id: 1, songName: "Queen of Kings"},
        {id: 2, songName: "Unicorn"}
    ];

    var i = 0;
    songs.forEach(s => {
        i++;
    });
    

function Song(props){
        return(
        <div>
            { props.songName }
        </div>
        )
}
const [inputSong, setInputSong] = useState("");
    
    const handleChange = (event) => {
        setInputSong(event.target.value)
    }

    const handleSubmitSong =  (event) => {
        event.preventDefault();
        addSongToList(i++, inputSong);

    }

    function addSongToList(id, name){
        songs.push({id:id, name:name});
        console.log(songs[id]);

    }
    
    return(
        <>
            <div className="songList">
                <ul>
                    {songs.map((song) => <Song key={song.id} songName={song.songName} />)}
                </ul>
            </div>
            <form>
                <input type='text' value={ inputSong } onChange={ handleChange } />
                <input type="submit" value='Dodaj pesmu' onClick={ handleSubmitSong }/>
            </form>
        </>
    )
}

export default SongList;