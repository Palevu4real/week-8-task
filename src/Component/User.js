import React from "react";

function Data(props) {
    const displayData = (props) => {
        const { data } = props;

        const imgStyle={
          margin:"20px 0 30px 0",
          borderRadius:"40px"
        }
        const ulStyle={
            padding: "0px 5px",
            listStyleType: "none",
            textAlign: "center"
        }
        

        if (data.length > 0) {
            return (
                data.map((val, index) => {
                    //'console.log(val);
                    return (
                        <div className="border border-info" style={{margin: "auto", width: "30vw"}} key={index}>
                            <ul className="fs-2" style={ulStyle} >
                                <img className="img-fluid" style={imgStyle} src="data:image/jpeg;base64,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" alt="avatar"/>
                                <li className="fw-bold" style={{color: "#b3090c"}}>Name: {val.name}</li>
                                <li>Gender: {val.gender}</li>
                                <li>Height: {val.height}</li>
                            </ul>
                        </div>
                    );
                })
            )
        }
        
    };

    return <>{displayData(props)}</>;
}

export default Data;

