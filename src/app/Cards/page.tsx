import React from "react";
import Card from "../Components/homeCardProps";

const App: React.FC = () => {
  return (
    <div className=" flex flex-wrap justify-center ">
      <Card
        title="Jobs"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        linkUrl="/Jobs"
        
      />
      <Card
        title="Scholarships"
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        linkUrl="/Scholarships"
        
      />
      <Card
        title="Internships"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        linkUrl="/Internships"
      />
    </div>
  );
};

export default App;
