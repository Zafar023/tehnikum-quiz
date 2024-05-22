import React, { useEffect, useState } from "react";

import { LinkButton } from "../components/LinkButton";
import { PrograsBar } from "../components/PrograsBar";
import { AppHeader } from "../components/AppHeader";
import { AppInput } from "../components/AppInput";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  let [userAnswer, setUserAnswer]= useState("")
  let [userError,setUserError]= useState(false)
  let [buttonError,setButtonError] = useState(true)
  let navigate = useNavigate()
  const handleClick = () => {
    if (!userAnswer) {
      setUserError(true);
    } else {
      setUserError(false)
      navigate("/step-two")
      localStorage.setItem  ('userOrigin', JSON.stringify( userAnswer ));
    }
  };

  useEffect(()=> {
    if (!userAnswer) {
      setButtonError(true)
    } else {
      setButtonError(false)
    }
  },[userAnswer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <PrograsBar currentStep="1"/>

          <div className="question">
            <AppHeader headerText="Откуда вы про нас узнали" headerType="h2"/>
            <label className="input-wrapper">
              <AppInput errorText="Введите текст"
              inputValue={userAnswer}
              hasError={userError}
              inputChange={setUserAnswer}
              />
            </label>
            <AppButton buttonClick={handleClick} isDisabled={buttonError}/>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
