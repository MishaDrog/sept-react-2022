import {useState} from "react";


const Count = () => {

    const [b, setB] = useState(0);
    console.log('Count');



    return (
        <div>
            <div>
                <div>B: {b}</div>
                <button onClick={()=> setB(prevState => prevState+1)}>Inc</button>
            </div>
        </div>
    );
};

export {Count};