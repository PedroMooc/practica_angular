//Destructuración de objetos
interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number
}


const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//console.log(audioPlayer);

const song = 'New Song';

const { 
    song:anotherSong, 
    songDuration: duration, 
    details: { author }
} = audioPlayer;


//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Author: ', author)



//Destructuración de arreglos

const [p1,p2,p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];



console.log('Personaje 3:', p3);


