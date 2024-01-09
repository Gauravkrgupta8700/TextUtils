import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  const myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',

  }
  // const [btntext, setBtnText] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });np
  //     setBtnText("Enable Light Mode");
  //   }
  // };
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className="my-2">About us </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analyze your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              In analyzing the text, several key features stand out. The
              language style employed is notably formal and informative,
              maintaining a neutral tone throughout. Sentences are
              well-structured, contributing to the overall clarity of the
              responses. The conciseness of the text is also apparent, with
              information presented efficiently and without unnecessary
              elaboration. The model exhibits adaptability by responding
              effectively to diverse prompts, showcasing a versatile range of
              capabilities. Coherence is maintained, ensuring a logical flow of
              ideas from one sentence to the next. While the responses lack
              emotional engagement or a personal perspective, they succeed in
              conveying information objectively. The depth of knowledge is
              evident, covering a broad range of topics, although it's essential
              to note that the information is based on data available up until
              January 2022. The use of natural language is a notable strength,
              allowing the model to understand and generate text in a manner
              that mimics human conversation. Consistency is maintained, with a
              consistent level of quality across different queries. However,
              it's crucial to verify information for real-time or critical
              applications due to the fixed knowledge cutoff date.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtil is a free character counter tool that provides instant
              character count & words count statistics for a given text.
              TextUtils reports the no of words and characters. thus it is
              suitable for writing text with word /character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Browser compatibility ensures websites and applications function
              consistently across different web browsers like Chrome, Firefox,
              Edge, and Safari. Developers adhere to web standards, employ
              responsive design for varied devices, and test thoroughly for
              seamless user experiences. Compatibility includes addressing
              JavaScript and CSS variations, considering browser versions, and
              monitoring industry updates. Aiming for cross-browser consistency
              contributes to user satisfaction, accessibility, and a successful
              online presence, acknowledging the evolving nature of browsers and
              web standards.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
  <button  onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
  </div> */}
    </div>
  );
}
