import React from 'react'
import MenuItem from './MenuItem'

import { Tilt } from "react-tilt";



const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Menu = ({items}) => {
  return (
      <div className='section-center'>
          {items.map((menuItem) => {
              return (
                <Tilt options={defaultOptions} key={menuItem.id}>
                  <MenuItem {...menuItem} />
                </Tilt>
              );
       })}
    </div>
  )
}

export default Menu