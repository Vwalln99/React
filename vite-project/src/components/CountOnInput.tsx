 import { SignalWifiStatusbarConnectedNoInternet4Rounded } from "@mui/icons-material";
import { useState, useRef } from "react";
 
 export default function CountOnInput() {
    const [value, setValue] = useState("");
    const counterRef = useRef(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
        counterRef.current++;
    };
    return (
        <>
        <input type="text" value={value} onChange={handleChange} />
        <br/>
        Input Changed: {counterRef.current} times.
        </>
    );
  }