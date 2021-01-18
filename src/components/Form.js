import React from "react";

export default function Form() {

    const [val, setVal] = React.useState(0)
    const [sum, setSum] = React.useState(0)

    const value = React.useRef();

    const submitInputs = (i) => {
        i.preventDefault();
        if (isNaN(value.current.value)){
            alert("It is not a valid number!")
        }
        else {
            setSum(parseInt(value.current.value) + sum)
            setVal(val + 1)
        }
        value.current.value = "";
    }

    return (
        <>
            <br/><br/>
            <div>
                <span>Avg: {sum !== 0 ? sum/val : 0}</span><br/>
                <span>Sum: {sum}</span>
            </div>
            <br/><br/>
            <form onSubmit={submitInputs}>
                <input ref={value} type="text" placeholder="Input numbers" required />
                <br/>
                <button>Calculate</button>
            </form>
        </>
    );
}
