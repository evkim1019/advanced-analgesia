import React, { useState } from 'react'
import './MobileBottomNav.css'

// icons
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link, useParams } from 'react-router-dom';



function MobileBottomNav() {

  const params = useParams()

  // Bottom Nav selection Toggle States & function
  const [ selectedNav, setSelectedNav ] = useState([
    { label:"one", value: true},
    { label:"two", value: false},
    { label: "three", value: false},
    { label: "four", value: false}
  ])
  const bottomNavSelectToggle = ({
    selectedNav, setSelectedNav, bottomNavSelectToggle
  }) => label => {
    const newBottomNavSelected = selectedNav.map(nav => {
      if(nav.label === label) {
        return( nav = { label: nav.label, value: true})
      } else {
        return ( nav = { label: nav.label, value: false})
      }
    })
    setSelectedNav(newBottomNavSelected)
  }

  return (
    <div id="mobileBottomNav">
      <div className="mobileBottomNav--wrapper smallText">

        <Link to='/' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('one')} className={`mobileBottomNav--item mobileBottomNav--itemOne ${selectedNav[0].value === true ? 'bottomNavActive' : ''}`}>
          <AccessibilityNewRoundedIcon />
          <p>Body</p>
        </Link>
        
        <Link to='/basics' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('two')} className={`mobileBottomNav--item mobileBottomNav--itemTwo ${selectedNav[1].value === true ? 'bottomNavActive' : ''}`}>
          <StickyNote2OutlinedIcon />
          <p>Basics</p>
        </Link>

        <Link to='/list' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('three')} className={`mobileBottomNav--item mobileBottomNav--itemThree ${selectedNav[2].value === true ? 'bottomNavActive' : ''}`}>
          <SortByAlphaOutlinedIcon />
          <p>List</p>
        </Link>

        <Link to='/info' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('four')}  className={`mobileBottomNav--item mobileBottomNav--itemFour ${selectedNav[3].value === true ? 'bottomNavActive' : ''}`}>
          <HelpOutlineIcon />
          <p>Info</p>
        </Link>
      </div>
    </div>
  )
}

export default MobileBottomNav