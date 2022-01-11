import React from 'react';

const Space = (props) => {
    let {mission_name,launch_year,mission_patch_small} = props;

    return (
        <div className='spa'>
          {mission_name}--{launch_year}

                <img src={mission_patch_small} alt={'space'}/>



        </div>
    );
};

export default Space;