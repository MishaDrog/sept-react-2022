import {useState} from "react";


const Count = () => {

    const [b, setB] = useState();
    console.log('Count');
    let a = 0;

    const inc = ()=>{
        a +=1
        setB(a);
        console.log(a);
    }

    return (
        <div>
            <div>
                <div>A: {a}</div>
                <button onClick={()=>inc()}>Inc</button>
            </div>
        </div>
    );
};

export {Count};