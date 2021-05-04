import React, { useState, useEffect } from 'react';

export default function Image({ image }) {
  const [currentImage, setCurrentImage] = useState();
  const [currentName, setCurrentName] = useState();
  const [currentWidth, setCurrentWidth] = useState();
  const [currentHeight, setCurrentHeight] = useState();
  const [currentId, setCurrentId] = useState();

  // useEffect takes in two arguments.
  // 1.Callback function
  // 2.array of dependencies
  useEffect(() => {
    fetch("../api/images")
        .then((response) => response.json())
        .then((data) => {
          setCurrentImage(data.link);
          setCurrentName(data.name);
          setCurrentWidth(data.width);
          setCurrentHeight(data.height);
          setCurrentId(data.link)
        });
  }, []);

  return (
    <>
      <div className="container">
        {/*Show the image*/}
        <img className="image-block" src={currentImage} alt="" id={currentId} style={{width:{currentWidth}}}></img>
        <div className="text-block">
          <p>{image.text}</p>
        </div>
      </div>
      <div className="image-info">
        {/*Show the url of the image*/}
        {/*image.url*/}
        {currentName}
        <br />
        <a href={currentImage} target={"_blank"} rel={"noreferrer"}>{currentImage}</a>
      </div>
    </>
  )
}