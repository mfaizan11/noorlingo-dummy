import Hero from './Hero'
import React from 'react'
import MissionValues from './MissionValues'
import BelowSection from './BelowSection'
import MobileSection from './MobileSection'

export default function about() {
  return (
    <div>
      <Hero />
      <MissionValues />
      <BelowSection />
      <MobileSection />
    </div>
  )
}

