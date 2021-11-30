import React, { useCallback } from 'react'
import { useSpring, config } from 'react-spring'
import MarqueeSpring from '../components/marquee-spring'

export default function Tests() {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: config.slow }))
  const onScroll = useCallback(e => set({ y: e.target.scrollTop }), [])
  return (
    <>
      <main onScroll={onScroll}>
        <h2>
          Scroll down. <span>&#8595;</span>
        </h2>
        <MarqueeSpring position={y} />
        <MarqueeSpring position={y} />
        <MarqueeSpring position={y} />
        <MarqueeSpring position={y} />
        <MarqueeSpring position={y} />
      </main>

      <style jsx global>
        {`
          html {
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
          }

          body {
            margin: 0;
            width: 100%;
            height: 100%;
          }
          main {
            position: relative;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            overflow: scroll;
          }
        `}
      </style>
    </>
  )
}
