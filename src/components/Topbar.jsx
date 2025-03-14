import React from 'react'
import '../Stylesheets/Topbar.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton } from '@mui/material';

const Topbar = () => {
  return (
    <div className="topbar-container">
        <div className="traffic-container">
            <div className="traffic-circle" style={{ backgroundColor: "red" }}></div>
            <div className="traffic-circle" style={{ backgroundColor: "yellow" }}></div>
            <div className="traffic-circle" style={{ backgroundColor: "green" }}></div>
        </div>

        <div className="action-container">
            <IconButton>
                <CalendarTodayIcon />
            </IconButton>

            <IconButton>
                <WestIcon />
            </IconButton>

            <IconButton>
                <EastIcon />
            </IconButton>
        </div>

        <div className="question-container">
            <IconButton>
                <HelpOutlineIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Topbar