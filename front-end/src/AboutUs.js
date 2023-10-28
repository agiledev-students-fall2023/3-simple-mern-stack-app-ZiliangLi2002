import { useState, useEffect } from "react";
import './AboutUs.css';

const AboutUs = () => {
    const [data, setData] = useState(null)

    if (!data) {
        fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
            .then(res => res.json()) 
            .then(data => setData(data)) 
            .catch(err => console.error(err));
        return <div>Loading...</div>;
    }

    return(
        <div>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
            <img src={data.picURL} alt="photo" />
        </div>
    );
}

export default AboutUs;