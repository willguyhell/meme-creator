import React from 'react'
// Import our image componenent
import Image from './Image'

export default function Memes( { pictures } ) {
  console.log(pictures)
  //Render out our images. Loop over our images inside of an array
  return (
    pictures.map(image => {
      // Return an Image componenant and pass it our memes
      // Set a unique key name. We will use the url
      // The key allows react to only re-render those componants that change instead of re-rendering all of them
      return <Image key={image.id} image={image} />
    })
  )
}