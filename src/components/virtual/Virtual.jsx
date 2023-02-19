import React from 'react'
import css from '../virtual/Virtual.module.css'
import shade from '../../assets/Shade.png'
import ReactCompareImage from 'react-compare-image'
import before from '../../assets/before.png'
import after from '../../assets/after.png'
const Virtual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Virtual Try-On</span>
        <span>Stop wishing you had great skin and get it</span>
        <span>Try Now!</span>
        <img src={shade} alt="" />
      </div>
      <div className='right'>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
    </div>
  )
}

export default Virtual
