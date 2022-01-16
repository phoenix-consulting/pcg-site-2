import React from 'react'
import InfoSec from '../InfoSec/InfoSec'

const ApplyVideo = () => {
    return (
        <div>
            <InfoSec subtitle="What is it like to be in Phoenix?" 
            background="gray" alignment="center">
            <div style={{textAlign: "center"}}>
            <iframe width="854" height="480" src="https://youtu.be/eiuG1SOJh7s"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
            </InfoSec>
        </div>
    )
}

export default ApplyVideo;
