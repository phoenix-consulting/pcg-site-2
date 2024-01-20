import React from "react"
import Banner from "../Banner/Banner"

import styles from "./MembersBanner.module.css"

const MembersBanner = () => {
  return (
    <div>
      <div>
        <div
          style={{
            paddingTop: "50px",
            paddingBottom: "20px",
            fontSize: "15",
            color: "gray",
            letterSpacing: "1.5",
            fontWeight: "300",
            marginLeft: "125px",
            //margin: "20px",
            //fontSize: "16px",
          }}
        >
          MEET THE MEMBERS
        </div>
        <div
          style={{
            fontSize: "30px",
            color: "#555555",
            letterSpacing: "1.5",
            marginLeft: "125px",
            width: "50%",
            lineHeight: "1.3",
            fontWeight: "300",
            //margin: "20px",
            //fontSize: "16px",
          }}
        >
          Feel free to reach out to any of our members to schedule a coffee
          chat, or also feel free to reach out to any of our members directly!
        </div>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            fontSize: "15",
            color: "gray",
            letterSpacing: "1.5",
            fontWeight: "300",
            marginLeft: "125px",
            //margin: "20px",
            //fontSize: "16px",
          }}
        >
          Each member's calendly is linked in their respective airtable card.
          <br></br>
          Please limit yourself to a single coffee chat so we have the
          opportunity to speak with all applicants!
        </div>
      </div>
    </div>
  )
}

export default MembersBanner
