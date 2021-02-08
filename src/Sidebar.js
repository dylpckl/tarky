import { AssignmentLate, MeetingRoom } from '@material-ui/icons';
import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    
    return (
        <div className="sidebar">
            <SidebarRow
                src='https://picsum.photos/id/1/200/300'
                title='dyl'
            />
            <SidebarRow Icon={AssignmentLate} title='Tasks'/>
            <SidebarRow Icon={MeetingRoom} title='Lobby'/>
        </div>
    )
}

export default Sidebar;
