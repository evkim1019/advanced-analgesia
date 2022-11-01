import React from 'react'
import { useParams } from 'react-router-dom'
import BasicScreen from '../BasicScreen'
import InfoScreen from '../InfoScreen'
import Body from './Body'
import BodyContentDetail from './BodyContentDetail'
import BodyContentList from './BodyContentList'
import ButtonView from './ButtonView'
import CardView from './CardView'

import './Content.css'
import List from './List'

function Content() {

  const pathname = window.location.pathname
  const params = useParams()

  return (
    <div className="content">

      { pathname === '/' ?
      // <Body />
      <ButtonView />
      : null}
      { Object.keys(params)[0] === 'bodyDetailList' && Object.values(params)[0] !== 'basics' && Object.values(params)[0] !== 'list' && Object.values(params)[0] !== 'info' ?
      <BodyContentList />
      : null}

      { pathname === '/basics' ?
      <BasicScreen />
      : null}

      { pathname === '/list' ?
      <List />
      : null}

      { pathname === '/info' ?
      <InfoScreen />
      : null}



      {/* DETAIL CONTENTS */}
      { pathname.includes('/headneck/') || pathname.includes('/torso/') || pathname.includes('/upperextremities/') || pathname.includes('/lowerextremities/') ? 
      < BodyContentDetail />
      : null }

      
    </div>
  )
}

export default Content