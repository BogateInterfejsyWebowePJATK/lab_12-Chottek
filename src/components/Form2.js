import React from "react";
import '../App.css'

export default function Form2() {

    const [name, setName] = React.useState()
    const [surname, setSurname] = React.useState()
    const [gender, setGender] = React.useState("STURMGEWEHR")
    const [motorcycle, setMotorcycle] = React.useState("YAMAHA YZF-R1")
    const [agreement, setAgreement] = React.useState(false)
    const [send, setSend] = React.useState(false)

    const submit = e => {
        e.preventDefault();
        setSend(true)
    }

    const reset = () => {
        setSend(false)
        setName("")
        setSurname("")
        setGender("Sturmgewehr 41")
        setMotorcycle("Yamaha YZF-R1")
        setAgreement(false)
    }

    return (
        <>
            {!send ?
                <div style={{border: "1px solid black", margin: "100px"}}>
                <form onSubmit={submit}>
                    <div style={{margin: 30}}>
                    <label>Name:</label><br/>
                    <input value={name} type="text" required onChange={(e) => setName(e.target.value)}/><br/>
                    <label>Surname:</label><br/>
                    <input value={surname} type="text" required onChange={(e) => setSurname(e.target.value)}/><br/>
                    </div>
                    <div style={{margin: 30}}>
                        <label>Sex:</label><br/>
                        <label>M:</label><input name="gender" type="radio" onChange={() => setGender("MALE")}/><br/>
                        <label>K:</label><input name="gender" type="radio" onChange={() => setGender("FEMALE")}/><br/>
                        <label>Sturmgewehr 41:</label><input name="gender" type="radio" onChange={() => setGender("STURMGEWEHR")}/><br/>
                        <label>Yes, please:</label><input name="gender" type="radio" onChange={() => setGender("YES")}/><br/>
                    </div>
                    <label>Favourite Motorcycle:</label><br/>
                    <select value={motorcycle} onChange={e => setMotorcycle(e.target.value)} required>
                        <option value="Yamaha R1">Yamaha YZF-R1</option>
                        <option value="Cagiva W16">Cagiva 600 W16</option>
                        <option value="BMW S1000RR">BMW S1000RR</option>
                        <option value="Kawasaki Z900">Kawasaki Z900</option>
                    </select><br/>
                    <div style={{margin: 30}}>
                        <label>Consent to acceptance of terms and conditions: &nbsp;</label>
                        <input type="checkbox" checked={agreement} onChange={() => setAgreement(!agreement)}/>
                    </div>

                    <button onClick={() => reset()}>Reset</button>
                    &nbsp;
                    <input type="submit" value="Calculate"/>
                    <br/><br/>
                </form>
                </div>
                :
                <table style={{border: "4px solid black",
                margin: "0 auto"}}>
                    <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Surname: </td>
                        <td>{surname}</td>
                    </tr>
                    <tr>
                        <td>Sex: </td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Favourite Motorcycle: </td>
                        <td>{motorcycle}</td>
                    </tr>
                    <tr>
                        <td>Terms accepted?: </td>
                        <td>{agreement ? "YES" : "NO"}</td>
                    </tr>
                    </tbody>
                    <br/><br/>
                    <button onClick={reset}>RESET</button>
                </table>
            }

        </>
    );
}
