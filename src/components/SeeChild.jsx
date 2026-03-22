import React from 'react'
import See from './See';
import "./Styles/See.css"

const SeeChild = () => {
    const cardData = [
      {
        id: 1,
        img: "https://assets.asana.biz/transform/1fdda26a-ab23-4138-bd1a-956fca2c91cc/Illustration-ReportingTiles?io=transform:fill,width:2560&format=webp",
        title: "Campaign management",
        description: "plan,track and complete your campaigns all in one place",
        foot: "See campaign management",
      },
      {
        id: 2,
        img: "https://assets.asana.biz/transform/5da0ba11-381c-4ce8-a264-0124cedbb07b/Illustration-EmptyCanvas?io=transform:fill,width:2560&format=webp",
        title: "Creative production",
        description:
          "Accelerative creative work by automating workflows from start to finish",
        foot: "See production",
      },
      {
        id: 3,
        img: "https://assets.asana.biz/transform/9f8d6271-7b63-461c-bdaa-f51650301c8f/Illustration-ProjectManagement?io=transform:fill,width:2560&format=webp",
        title: "Project intake",
        description:
          "Capture, prioritize, and assign requests automatically so your teams have more time to work.",
        foot: "See project intake",
      },
      {
        id: 4,
        img: "https://assets.asana.biz/transform/e8d4bf6c-013f-4913-806d-c400279f18c0/Illustration-GetStartedRocket?io=transform:fill,width:2560&format=webp",
        title: "Product launches",
        description:
          "Coordinate teams,tasks, and timelines to keep every launch on schedule.",
        foot: "See project launches",
      },
      {
        id: 5,
        img: "https://assets.asana.biz/transform/ca22aeb3-c084-45e6-8fb8-3fb0fe716e31/Illustration-Reporting?io=transform:fill,width:2560&format=webp",
        title: "Organizational planning",
        description:
          "Address business needs quickly by analyzing progress,bandwidth, and blockers on one platform.",
        foot: "See organizational planning",
      },
      {
        id: 6,
        img: "https://assets.asana.biz/transform/b0b3ce36-6d40-4767-81fa-fcac3406b263/Illustration-UserAvatars?io=transform:fill,width:2560&format=webp",
        title: "Resource planning",
        description:
          "Visualize how teams are staffed and what resources are available across your business",
        foot: "See resource planning",
      },
      {
        id: 7,
        img: "https://assets.asana.biz/transform/bc22f3a7-b7d8-45de-9f38-8020a28ddcfb/Illustration-GoalTarget?io=transform:fill,width:2560&format=webp",
        title: "Goal management",
        description:
          "Connect everyone's work to the organizational goals they support.",
        foot: "See goal management",
      },
      {
        id: 8,
        img: "https://assets.asana.biz/transform/b5e5b9c5-4bf6-4c81-adc8-737a46805653/Illustration-ConnectivityPaperCutout?io=transform:fill,width:2560&format=webp",
        title: "Employee onboarding",
        description:
          "Standardize onboarding to help new employees make an impact quickly",
        foot: "See employee onboarding",
      },
    ];

  return (
     <div className="See-container">
      <div className="See-hold">
        <div className="see-text">
          <h1>See how Asana keeps <br />
            work moving across use <br /> cases</h1>
        </div>
    <div className='component-holder'>
      {cardData.map((item)=>(
        <See key={item.id} data={item} />
      ))}
    </div>
    </div>
    </div>

  )
}

export default SeeChild;