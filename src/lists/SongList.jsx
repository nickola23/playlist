function SongList(){

    const songs = [
        {id: 1, songName: "Queen of Kings"},
        {id: 2, songName: "Unicorn"}
    ];

function Song(props){
        return(
        <div>
            {props.songName}
        </div>
        )
}
    return(
        <div className="songList">
            <ul>
                {songs.map((song) => <Song key={song.id} songName={song.songName} />)}
            </ul>
        </div>
    )
}

export default SongList;