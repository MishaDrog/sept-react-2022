import {useState} from "react";


const Count = () => {

    const [b, setB] = useState(0);
    console.log('Count');


    const inc = ()=>{
        setB(b+1);

    }

    return (
        <div>
            <div>
                <div>B: {b}</div>
                <button onClick={()=>inc()}>Inc</button>
            </div>
        </div>
    );
};

export {Count};