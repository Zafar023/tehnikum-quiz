// import React from "react";

// import { LinkButton } from "../components/LinkButton";
// import { PrograsBar } from "../components/PrograsBar";
// import { AppHeader } from "../components/AppHeader";
// import { Wraper } from "../components/Wraper";
// const StepThree = () => {
//   return (
//     <div className="container">
//       <Wraper>
//         <div className="emoji-quiz">
//         <PrograsBar currentStep="3"/>
//           <div className="question">
//             <AppHeader headerText="3. Занимательный вопрос" headerType="h2"/>
//             <ul className="emoji-variants">
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-1" />
//                 <label htmlFor="variant-1">
//                   <img src="./img/laugh.png" alt="laugh" />
//                   <p>Ваш ответ 1</p>
//                 </label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-2" />
//                 <label htmlFor="variant-2">
//                   <img src="./img/hearts.png" alt="hearts" />
//                   <p>Ваш ответ 2</p>
//                 </label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-3" />
//                 <label htmlFor="variant-3">
//                   <img src="./img/smirk.png" alt="smirk" />
//                   <p>Ваш ответ 3</p>
//                 </label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-4" />
//                 <label htmlFor="variant-4">
//                   <img src="./img/fright.png" alt="fright" />
//                   <p>Ваш ответ 4</p>
//                 </label>
//               </li>
//             </ul>
//             <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/step-four"/>
//           </div>
//         </div>
//       </Wraper>
//       </div>
//   );
// };

// export default StepThree;


import React from "react";
import { LinkButton } from "../components/LinkButton";
import { PrograsBar } from "../components/PrograsBar";
import { AppHeader } from "../components/AppHeader";
import { Wraper } from "../components/Wraper";
import { Img } from "../components/Img"; // Import the Img component

const StepThree = () => {
  return (
    <div className="container">
      <Wraper>
        <div className="emoji-quiz">
          <PrograsBar currentStep="3"/>
          <div className="question">
            <AppHeader headerText="3. Занимательный вопрос" headerType="h2" />
            <ul className="emoji-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">
                  <Img src="./img/laugh.png" alt="laugh" />
                  <p>Ваш ответ 1</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">
                  <Img src="./img/hearts.png" alt="hearts" />
                  <p>Ваш ответ 2</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">
                  <Img src="./img/smirk.png" alt="smirk" />
                  <p>Ваш ответ 3</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">
                  <Img src="./img/fright.png" alt="fright" />
                  <p>Ваш ответ 4</p>
                </label>
              </li>
            </ul>
            <LinkButton isDisabled={false} buttonType="button" linkText="Далее" linkBtn="/step-four" />
          </div>
        </div>
      </Wraper>
    </div>
  );
};

export default StepThree;
