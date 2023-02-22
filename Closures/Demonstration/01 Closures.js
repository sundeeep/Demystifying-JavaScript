let num = 10;

const outer = () => {
    let num = 10;
    const inner = () => {
        // let num = 20
        const core = () => {
        console.log("In Core", num);
        };
        return core;
    };
    return inner;
};

outer()()();
