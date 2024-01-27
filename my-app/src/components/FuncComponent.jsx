import React, { useState } from "react";

function FuncComponent(props) {
    const [count, setCout] = useState(0);
    return (
        <div>
            <p>Function Component</p>
            <button onClick={() => setCout(count+1)}>Click on me to increase the count by 1</button>
            <button onClick={() => setCout(count-1)}>Click on me to decrease the count by 1</button>
            <h1>{count}</h1>
            <h4>Name: {props.name}. Company: {props.company}. Age: {props.age}</h4>
            <input type="text" onChange={(e) => props.setName(e.target.value)} />
            {/* <button onClick={() => props.setName("abc")}>Change name to abc</button> */}
        </div>
    )
}

export default FuncComponent;