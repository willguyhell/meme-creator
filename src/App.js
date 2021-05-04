// import the useState hook
// React manages states inside the app. When that state changes, it re-renders things for us. We want to store our images and text inside of a state.
// Import the useRef hook to know what the user has written in the text box
import React, { useState, useEffect, useRef } from 'react';
// The Memes.js file handles the images
import Memes from "./Memes"
// The css file handles the style
import "./App.css";

function App() {
  // Call the useState function and pass it our default state which will be a standard meme
  // Set it to a variable using const. The first element will be every one of our memes (images)
  // The second is a function that we call that allows us to update our images
  const [memes, setMemes] = useState([{ id: 1, url: '', text: 'Your text here' }])
  // Set the memeTextRef which is what the user will enter in the text box
  const memeTextRef = useRef()

  // Create the handleAddText function that adds text to our images
  function handleAddText() {
    // Access the memeTextRef that the user entered and set the typed variable to be the current value of the input
    const typed = memeTextRef.current.value
    // If the user has typed nothing, return nothing
    if (typed === '') return
    // log in the console what the user typed
    console.log(typed)
    // Add the typed text to the image
    const newState =[...memes]
    newState.text = typed
    setMemes(addingText => {
      return [{ id: 1, url: '', text: newState.text}]
    })
    /*
    setMemes(addingText => {
      return [addingText, { id: 1, url: '', text: typed}]
    })
    */
    // Clear the input after we've added the text by setting it to null
    memeTextRef.current.value = null
  }


  return (
    <>
      <Memes pictures={memes} />
      {/*Get the variable which is what the user typed in*/}
      <input ref={memeTextRef} type="text" />
      {/*Add text to the image when the Add text button is clicked*/}
      <button onClick={handleAddText}>Add text</button>
      {/*<button>Clear text</button>*/}
      <div className="me">Meme creator by <a href={'https://willhelliwell.com'} target={'_blank'} rel={"noreferrer"}>Will Helliwell</a></div>
    </>
  )
}

export default App;
