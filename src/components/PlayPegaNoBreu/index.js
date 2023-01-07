import PegaNoBreu from '../../assets/saveiro-pega-no-breu.mp3';

const PlayPegaNoBreu = () => {
    
    return (
        <audio controls autoPlay>
            <source src={PegaNoBreu} type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
    );
};

export default PlayPegaNoBreu;