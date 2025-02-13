"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp
        duration={2.80}
        decimals={2}
        decimal=","
        prefix="RON"
         end={amount} />
    </div>
  )
}

export default AnimatedCounter