import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import InfoCard from '../InfoCard/InfoCard'

import { project_timeline } from '../../constants'

const ProjectsTimeline = () => {

    const timelineCards = project_timeline.map((timelineObj, index) => {
        let color_string = "";
        switch (index) {
            case 0:
                color_string = "#e54a51";
                break;
            case 1:
                color_string = "#e54a51";
                break;
            case 2:
                color_string = "#e54a51";
                break;
            case 3:
                color_string = "#e54a51";
                break;
            case 4:
                color_string = "#e54a51";
                break;
        }
        return (
            <div style={{flex: "0 0 auto", width: "200px"}}>
                <InfoCard
                    title={timelineObj.stage}
                    description={timelineObj.description}
                    backgroundColor={color_string} height="47vh" width="">
                </InfoCard>
            </div>
        )
    });


    return (
        <div>
            <InfoSec 
            regtitle="Typical Project Timeline" 
            smallsubtitle="Phoenix generally takes on four 12-13 week client projects a semester."
            background="gray"
            >
            <div style={{display: "flex", flexWrap: "nowrap", overflowX: "auto"}}>
                {timelineCards}
            </div>
            </InfoSec>
        </div>
    )
}

export default ProjectsTimeline;