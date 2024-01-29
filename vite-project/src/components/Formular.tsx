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
    
}