'use client';

import { Fade } from "react-awesome-reveal";

//This component exists solely to get this line of code out of the homepage
//file to remove use client
export default function SushiText() {
  return <Fade cascade damping={0.1} direction="up">Experience Sushi</Fade>
}