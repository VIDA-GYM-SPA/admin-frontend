import React, { useEffect, useState } from 'react'
import { RingProgress } from '@mantine/core';

interface Props {
  time: number;
}

interface ITimer {
  time: number;
  seconds: number;
  minutes: number;
}

export const Timer: React.FC<Props> = ({ time }) => {
  debugger;
  const [timer, setTimer] = useState<ITimer>({
    time,
    minutes: Math.floor(((time - 1) / 60) / 60) * 60 - 1,
    seconds: Math.floor((time - 1) / 60)
  })

  useEffect(() => {
    setTimeout(() => {
      if (timer.time === 0) {
        return;
      }

      setTimer({
        time: timer.time - 1,
        minutes: Math.floor((timer.time - 1) / 60) * 60 - 1,
        seconds: timer.time - Math.floor((timer.time - 1) / 60) * 60 - 1
      })
    }, 1000)
  }, [timer.time])

  return (
    <div
      style={{ width: '100%', height: '100%'}}
    >
      <RingProgress 
        size={40}
        thickness={2}
        sections={[
          { value: 25 * timer.seconds, color: 'blue'}
        ]}
      />
    </div>
  )
}