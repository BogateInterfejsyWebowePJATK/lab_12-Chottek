import React from "react";
import user from "../data/user.json"

export default function Form3(){
    const [mail, resetMail] = "";
    const [pass, resetPass] = "";

    let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const submit = (e) => {
        e.preventDefault();
        if(regex.test(mail.value)){
            if (user["pass"] !== pass.value || user["mail"] !== mail.value) {
                alert("Wrong e-mail or password!")
                resetMail();
                resetPass();
            } else {
                alert("Successfuly logged in")
            }
        }
        else{
            alert("Please Provide email with correct regex")
            resetMail();
        }
    }
    return(
        <>
            <form onSubmit={submit}>
                <br/>
                <label htmlFor="uname"><b>Username</b></label>&nbsp;
                <input {...mail} type="text" placeholder="Enter Email" required/>
                <br/><br/>
                <label htmlFor="psw"><b>Password</b></label>&nbsp;
                <input {...pass} type="password" placeholder="Enter Password" required/>
                <br/><br/>
                <input type="submit" value="Send"/>
            </form>
            <br/><br/>
        </>
    );
}
