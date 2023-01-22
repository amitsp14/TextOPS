import React, { useState } from 'react'


export default function (props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {

        // console.log ("Uppercase was clicked" + text)

        let newText = text.toUpperCase();

        setText(newText)
        props.showalert("Converted to Uppercase", "success")

    }


    const handleloClick = () => {

        // console.log ("Uppercase was clicked" + text)

        let newText = text.toLowerCase();

        setText(newText)
        props.showalert("Converted to Lowercase", "success")

    }

    const replaceAll = () => {

        var a = prompt("Replace this : ");
        var b = prompt("With this : ");

        let newText = text.replaceAll(a, b);

        setText(newText)
        props.showalert("All required words have been repalced", "success")


    }

    const clearText = () => {


        setText('')
        props.showalert("Input console has been reset", "warning")

    }
    const handleCamelCase = () => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const newText = arr.join(" ");
        setText(newText);
        props.showalert("Converted to Camel case", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showalert("Copied to Clipboard!", "info");
    }
    const handleOncChange = (event) => {


        setText(event.target.value);

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra spaces removed!", "success");
    }

   

    return (
        <>

            <div className='Container1 card-header' style={{color :props.mode==='dark'?'white':'black'}}>

                <h1>{props.heading}</h1>

                <div className="card border-dark mb-3 card-body text-dark">

                    <textarea className="form-control" value={text} style= {{
                     
                     backgroundColor :props.mode==='dark'?'#001902':'white',

                     color :props.mode==='dark'?'white':'black'

                    }} onChange={handleOncChange} id="mybox" rows="10"></textarea>


                </div>
                <button className='btn btn-primary mx-3 my-2' onClick={handleUpClick} > Convert to uppercase</button>
                <button className='btn btn-primary mx-3 my-2' onClick={handleloClick} > Convert to lowercase</button>
                <button className='btn btn-primary mx-3 my-2' onClick={replaceAll} > Replace a Word</button>
                <button className='btn btn-primary mx-3 my-2' onClick={handleCamelCase} > Convert to Camel case</button>
                <button className='btn btn-primary mx-3 my-2' onClick={handleExtraSpaces} > Remove Extra Spaces</button>
                <button className='btn btn-primary mx-3 my-2' onClick={handleCopy} > Copy to clipboard</button>
                <button className='btn btn-danger mx-3 my-2' onClick={clearText} > Reset</button>

            </div>

            <div className="container2  my-4" style={{color :props.mode==='dark'?'white':'black'}} >

                <h2>Your Text Summery</h2>

                <dl className="row">
                    <dt className="col-sm-3">Words : </dt>
                    <dd className="col-sm-9">{text.split(" ").length}</dd>

                    <dt className="col-sm-3">Characters :</dt>
                    <dd className="col-sm-9">{text.length}</dd>
                </dl>

                {/* 
                <p>Words : {text.split(" ").length} </p>
                <p>Characters : {text.length}</p>
                <h2> </h2> */}
                <h2>Preview</h2>
                <p>{text}</p>

            </div>

            {/* <div className="card border-dark mb-3" style="max-width: 18rem;">
                <div className="card-header">Header</div>
                <div className="card-body text-dark">
                    <h5 className="card-title">Dark card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> */}

        </>
    )
}
