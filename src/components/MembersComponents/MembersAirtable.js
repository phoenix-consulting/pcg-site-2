import React from 'react'
import InfoSec from '../InfoSec/InfoSec'

const Members = () => {
    return (
        <div>
        <InfoSec
            regtitle="Meet Phoenix!"
        smallsubtitle="Feel free to reach out to any of our members to schedule a coffee chat! Fill out the form on the 'Join' page to schedule a coffee chat, or also feel free to reach out to any of our members directly!"
            background="white"
        >
            <div style={{border:"1px solid lightgrey"}}>
                <iframe
                src="https://airtable.com/embed/shrBV27sPwRtNXJwQ?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="670">
                </iframe>
            </div>
        </InfoSec>
        </div>
    )
}

export default Members;