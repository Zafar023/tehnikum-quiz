import React from "react";
import { Link } from "react-router-dom";

// export const LinkButton = ({linkBtn,linkText,linkType,isDisabled}) => {
// return(
//     <Link to={linkBtn}>
//         <button type={linkType} id="next-btn" disabled={isDisabled}>
//             {linkText}
//         </button>
//     </Link>
// )
// }
export const LinkButton = ({ linkBtn, linkText, buttonType, isDisabled }) => {
    return (
      <Link to={linkBtn}>
        <button type={buttonType} id="next-btn" disabled={isDisabled}>
          {linkText}
        </button>
      </Link>
    );
  };