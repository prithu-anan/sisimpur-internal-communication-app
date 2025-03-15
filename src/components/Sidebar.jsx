import { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';
import '../stylesheets/Sidebar.css';
import logo from '../assets/traq-logo.svg';

const Sidebar = () => {
  const options = ['Home', 'DMs', 'Activity', 'Later', 'More'];
  const [currentOption, setCurrentOption] = useState('Home');

  const users = ['Search', 'Add', 'Avatar'];

  return (
    <div className="sidebar-container">
      <div className="options-container">
        {options.map((option, index) => (
          <div 
            key={index} 
            className={`option-container ${currentOption === option ? 'active' : ''}`} 
            onClick={() => setCurrentOption(option)}
          >
            <div className='option'>
              {option === 'Home' && <HomeOutlinedIcon className={`option-icon ${currentOption === option ? 'selected' : ''}`} />}
              {option === 'DMs' && <ChatIcon className={`option-icon ${currentOption === option ? 'selected' : ''}`} />}
              {option === 'Activity' && <NotificationsActiveOutlinedIcon className={`option-icon ${currentOption === option ? 'selected' : ''}`} />}
              {option === 'Later' && <BookmarkAddedOutlinedIcon className={`option-icon ${currentOption === option ? 'selected' : ''}`} />}
              {option === 'More' && <MoreHorizIcon className={`option-icon ${currentOption === option ? 'selected' : ''}`} />}
              <p className={`option-text ${currentOption === option ? 'selected-text' : ''}`}>{option}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="users-container">
        {users.map((user, index) => (
          <div key={index} className="user-container">
            {user === 'Search' && <SearchOutlinedIcon className='option-icon' />}
            {user === 'Add' && <AddIcon className='option-icon' />}
						{user === 'Avatar' && <img src={logo} alt="avatar" className='avatar' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
