// import React from "react";
// import { AppHeader } from "../components/AppHeader";  
// import { PrograsBar } from "../components/PrograsBar";
// import { LinkButton } from "../components/LinkButton";
// import { Wraper } from "../components/Wraper";
// import { AnswerItem } from "../components/AnswerItem";
// const StepFour = () => {
//   const variants = [
//     {
//       id: "variant-1",
//       labelText: "1",
//     },
//     {
//       id: "variant-2",
//       labelText: "2",
//     },
//     {
//       id: "variant-3",
//       labelText: "3",
//     },
//     {
//       id: "variant-4",
//       labelText: "4",
//     },
//     {
//       id: "variant-5",
//       labelText: "5",
//     },
//   ];
//   const [checkedAnswer, setcheckedAnswer] = useState(null)
//   useEffect (() => {
//     if (checkedAnswer === null) {
//       localStorage.setItem('checkedNumi', '')
//     } else {
//       localStorage.setItem('checkedNumi', JSON.stringify(checkedAnswer))
//     }
//   },[checkedAnswer])

//   return (
//     <div className="container">
//       <Wraper>
//         <div className="emoji-quiz">
//         <PrograsBar currentStep="4"/>
//           <div className="question">
//           <AppHeader headerText="4. Занимательный вопрос" headerType="h2"/>
//             <ul className="level-variants">

//             {variants.map((elem) => (
//                 <AnswerItem
//                   key={elem.id}
//                   id={elem.id}
//                   src={elem.src} 
//                   alt={elem.alt}
//                   AnswerLabel={elem.labelText} 
//                   onChange={() => setcheckedAnswer(elem.labelText)}
//                   checked={checkedAnswer === elem.labelText}
//                 />
//               ))}
//               {/* <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-1" />
//                 <label htmlFor="variant-1">1</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-2" />
//                 <label htmlFor="variant-2">2</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-3" />
//                 <label htmlFor="variant-3">3</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-4" />
//                 <label htmlFor="variant-4">4</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-5" />
//                 <label htmlFor="variant-5">5</label>
//               </li> */}
//             </ul>
//             <LinkButton isDisabled={checkedAnswer === null} linkType="Button" linkText="Далее" linkBtn="/thanks"/>
//           </div>
//         </div>
//       </Wraper>
//       </div>
    
//   );
// };

// export default StepFour;
import React, { useState, useEffect } from "react"; // Ensure hooks are imported
import { AppHeader } from "../components/AppHeader";  
import { PrograsBar } from "../components/PrograsBar";
import { LinkButton } from "../components/LinkButton";
import { Wraper } from "../components/Wraper";
import { AnswerItem } from "../components/AnswerItem";

const StepFour = () => {
  const variants = [
    {
      id: "variant-1",
      labelText: "1",
    },
    {
      id: "variant-2",
      labelText: "2",
    },
    {
      id: "variant-3",
      labelText: "3",
    },
    {
      id: "variant-4",
      labelText: "4",
    },
    {
      id: "variant-5",
      labelText: "5",
    },
  ];

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  useEffect(() => {
    if (checkedAnswer === null) {
      localStorage.setItem('checkedNumi', '');
    } else {
      localStorage.setItem('checkedNumi', JSON.stringify(checkedAnswer));
    }
  }, [checkedAnswer]);

  return (
    <div className="container">
      <Wraper>
        <div className="emoji-quiz">
          <PrograsBar currentStep="4" />
          <div className="question">
            <AppHeader headerText="4. Занимательный вопрос" headerType="h2" />
            <ul className="level-variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  AnswerLabel={elem.labelText}
                  onChange={() => setCheckedAnswer(elem.labelText)}
                  checked={checkedAnswer === elem.labelText}
                />
              ))}
            </ul>
            <LinkButton
              isDisabled={checkedAnswer === null}
              buttonType="button"
              linkText="Далее"
              linkBtn="/thanks"
            />
          </div>
        </div>
      </Wraper>
    </div>
  );
};

export default StepFour;
