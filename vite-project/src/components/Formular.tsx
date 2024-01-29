import { useState } from "react";

export default function InputForm(){
    const initialUserData={
        fullname:"",
        email:"",
        password:"",
        confirmPassword:"",
    };
    //State
    const [userData, setUserData]=useState(initialUserData);
    //Style
    const blockStyle={
        display:"block",
    };
    const paddingStyle={
        padding: "10px",
    };

    const btnStyle={
        padding:"10px",
        backgroundColor: "#add8e6",
        border:"none",
        borderRadius:"3px",
    };

    return(
        <form>
            <div style={paddingStyle}>
                <label style={blockStyle}>Full Name</label>
                <input type="text" value={userData.fullname}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>E-Mail</label>
                <input type="email" value={userData.email}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Password</label>
                <input type="password" value={userData.password}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Confirm Password</label>
                <input type="password" value={userData.confirmPassword}></input>
            </div>
            <div style={paddingStyle}>
                <button type="submit" style={btnStyle}> Submit{" "}</button>
            </div>
        </form>
    );
}