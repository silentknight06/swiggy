  import User from "./User";
  import Userclass from "./Usercalss";
  import  React from "react";


  import { useState } from "react";
import FAQ from "./FAQ";
import faqData from "../utils/faqData";

const About = () => {
  const [showItems, setShowItems] = useState(0);

  return (
    <div className="About-container">
      <h1>More About this project</h1>
      <div className="acordian">
        {faqData.map((data, index) => (
          <FAQ
            key={data.id}
            showItems={index === showItems ? true : false}
            setShowItems={() => {
              if (index === showItems) {
                setShowItems(null);
              } else {
                setShowItems(index);
              }
            }}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;


  // class About extends React.Component{
  //       constructor(props){
  //             super(props);
  //             console.log("parent constructor");
  //       }
  //       componentDidMount(){
             
  //       }
  //       render(){
  //         return(
               
  //           <div> 
  //           <h1>About</h1>
  //           <h1>this is react about component</h1>
  //             {/* <User name={"suraj kumar function"} /> */}
  //             <Userclass name={"suraj kumar class"} location={"goraul class"} />
              
  //           </div>
  //         )
  //       }
  // }
// const About=()=>{
//     return(
//         <div> 
//         <h1>About</h1>
//         <h1>this is react about component</h1>
//           {/* <User name={"suraj kumar function"} /> */}
//           <Userclass name={"suraj kumar class"} location={"goraul class"} />
//         </div>
//     )
// }
// export default About;