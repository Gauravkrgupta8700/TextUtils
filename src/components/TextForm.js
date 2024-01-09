import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to UpperCase","Success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to LowerCase","Success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        // props.showAlert("Text Cleared","Success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleExtraSpaces=() =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        //    props.showAlert("Extra Space has been removed","Success");

    }

    const [text, setText]= useState('Enter Text Here')

  return (
    <>
   
    <div className='container my-8 mx-7 ' style={{color : props.mode==='dark'?'white' :'#042743' }} >
        <h1 mb-2 >{props.heading}</h1>
     <div className="form-floating my-3">
        <textarea className="form-control" style={{backgroundColor :props.mode==='dark'?'#13466e':'white', color : props.mode ==='dark'?'white' :'black' }} placeholder="Leave a comment here" value={text} onChange={handleOnChange} id="floatingTextarea" defaultValue={""} />
        
        <button disabled={text.length===0} type="button" className="btn btn-primary  my-2 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button  disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0}  type="button" className="btn btn-primary  mx-2 my-1 " onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary  mx-2 my-1 " onClick={handleExtraSpaces}>Remove Space</button>
      </div>
    </div> 
    <div className='container my-8 mx-7'  style={{color :props.mode==='dark'?'white' :'#042743' }}>
        <h2> Your Text Summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!=0}).length}words,  {text.length} characters</p>
        <p>{0.008* text.split(" ").length} minutes reading </p>
        <h2>Preview</h2>
        {/* <p> {text}</p> */}
        <p> {text.length>0?text:"Enter something in the text  to preview it here  "}</p>
        </div>

    </> 
    )
};
