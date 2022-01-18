import React from 'react'
import InfoSec from '../InfoSec/InfoSec'

const ApplyVideo = () => {
    return (
        <div>
            <InfoSec subtitle="What is it like to be in Phoenix?" 
            background="gray" alignment="center">
            <div style={{textAlign: "center"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eiuG1SOJh7s" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            </div>
            </InfoSec>
        </div>
    )
}

export default ApplyVideo;
