import React, {useEffect, useState} from 'react';
import Space from "../Space/Space";

const SpaceX = () => {

    const [space,setSpace]=useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setSpace(value.filter(value=>value.launch_year !== '2020')))
    },[])

    return (
        <div className='spa'>
            {
                space.map(value => <Space  mission_name={value.mission_name} launch_year={value.launch_year}
                                          mission_patch_small={value.links.mission_patch_small}/>)
            }
        </div>
    );
};

export default SpaceX;