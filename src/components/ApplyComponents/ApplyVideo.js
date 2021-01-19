import React from 'react'
import InfoSec from '../InfoSec/InfoSec'

const ApplyVideo = () => {
    return (
        <div>
            <InfoSec subtitle="WHAT IS PHOENIX LIKE?" 
            background="gray" alignment="center">
            <div style={{textAlign: "center"}}>
            <iframe width="854" height="480" src="https://www.youtube.com/embed/nFAK8Vj62WM" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
            </InfoSec>
        </div>
    )
}

export default ApplyVideo;