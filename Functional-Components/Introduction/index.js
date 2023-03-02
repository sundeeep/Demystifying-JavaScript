var state = null;

const useState = (initialState) => {
    state = initialState;
    
    const setState = (param) => {
        useState(param);
    }

    return [state, setState];
};

const [number, setNumber] = useState(7);

console.log(number);

setNumber(9);

console.log(number)

