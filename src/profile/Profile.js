import React from 'react';
import PropTypes from "prop-types";

const Profile=({fullname,bio,profession,children,handleName})=> {
    
    return (
        <div>
            <div style={{display:'block' ,textAlign:'center'}}>
                {children}
                <h1 style={{fontFamily: 'Raleway',fontStyle:'bold',fontSize:34,color:"#273746"}}>{fullname}</h1>
            </div>
            <div style={{display:'block'}}>
                <p style={{fontFamily: 'sans-serif' ,fontSize:19, margin: '50px 25px'}}>Biography : {bio}</p>
                <div>
                    <span style={{fontFamily: 'sans-serif' ,fontSize:20, margin: '25px 25px',color:'#117A65'}}>Profession : {profession}</span>
                </div>
            </div>
            <button style={{padding: "0.75rem 0.25rem", margin: "0 1rem 1.5rem",color: "#282936",borderRadius:80,justifyContent:"center",alignItems:"center"}}
            onClick={()=>handleName(fullname)}>More Info</button>

            <hr/>
        </div>
    )
}

Profile.prototype={
    fullName: PropTypes.string,
    children:PropTypes.any,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}

Profile.defaultProps={
    fullName: "unknown",
    children: <img src={"https://www.clker.com/cliparts/M/o/W/d/C/j/about-icon-hi.png"} alt="photo"/>,
    bio: "information dosen't exist",
    profession: "Can't found"

}

export default Profile