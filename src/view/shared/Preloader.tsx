import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export const Preloader = () => (
  <div className="preloader-wrapper">
    <CircularProgress color={'inherit'} size={25}/>
  </div>
)