import React from 'react'
import { a } from 'react-spring'

export default function MarqueeSpring({ position }) {
  return (
    <div className="marquee-wrapper">
      <a.div style={{ transform: position.interpolate(x => `translate3d(${x / 15}px,0,0)`) }}>
        <div className="marquee marquee-top">Minimalism Minimalism Minimalism Minimalism Minimalism</div>
      </a.div>
      <a.div style={{ transform: position.interpolate(x => `translate3d(${-x / 15}px,0,0)`) }}>
        <div className="marquee marquee-bottom">Minimalism Minimalism Minimalism Minimalism Minimalism</div>
      </a.div>
      <style jsx>{`
        div.marquee {
          font-size: 10rem;
          line-height: 9rem;
          font-weight: bold;
          white-space: nowrap;
          position: absolute;
          text-transform: uppercase;
          margin: 0;
          padding: 0;
          pointer-events: none;
        }

        div.marquee-bottom {
          -webkit-text-stroke: 1px;
          text-stroke: 4px;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          bottom: -10rem;
          left: -90vw;
          top: 0;
        }

        div.marquee-top {
          right: -140vw;
          bottom: 0;
        }

        div.marquee-wrapper {
          height: 25rem;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
