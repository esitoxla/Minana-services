import React from 'react'
import AboutPalm from '../components/AboutPalm'
import AboutCoconut from '../components/AboutCoconut'
import AboutTeam from '../components/AboutTeam'
import AboutKernel from '../components/AboutKernel'

export default function AboutPage() {
  return (
    <>
      <AboutTeam />
      <AboutPalm/>
      <AboutCoconut/>
      <AboutKernel/>
    </>
  );
}
