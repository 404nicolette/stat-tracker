import React from 'react'

const Stretched=({children, className="", ...props})=>{
    return(
        <h1 className={`font-stretch-expanded  ${className}`}>{children}</h1>
    ) 
}

const Humanist=({children, className="", ...props})=>{
    return(
        <h1 className={`font-humanist  ${className}`}>{children}</h1>
    )
}

const Unbounded=({children, className="", ...props})=>{
    return(
        <h1 className={`font-unbounded  ${className}`}>{children}</h1>
    )
}

const Text = {Stretched, Humanist,Unbounded };
export default Text