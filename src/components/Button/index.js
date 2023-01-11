
const Button = () => {
    function Click() {
        let i = 0;
        while (i < 10) {
            window.open('https://images.emojiterra.com/twitter/v13.1/512px/267f.png');
            i++
        }
    }
    return (   
        <div className='Button' onClick={Click} />
    );
}

export default Button;