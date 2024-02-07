import React from 'react';
import Card from '../Components/homeCardProps';

const App: React.FC = () => {
  return (
    <div className=" flex flex-wrap justify-center ">
      <Card 
        title="JOBS" 
        content="This is the content of the first card." 
        // imageUrl="/resume.svg" 
      />
      <Card 
         title="SCHOLARSHIPS" 
         content="This is the content of the first card." 
        //  imageUrl="/educator.svg" 
      />
      <Card 
         title="INTERNSHIPS" 
         content="This is the content of the first card." 
        //  imageUrl="/brainstorming.svg" 
      />
    </div>
  );
};

export default App;
