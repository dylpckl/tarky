import { Avatar, IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title }) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {/* {Icon && <Icon />} */}
            {/* <Tooltip title={title} placement="right" arrow>*/}
            <Tooltip title={<h3 style={{ color: "white" }}>{title}</h3>} placement="right" arrow>
                <IconButton>
                    {Icon && <Icon style={{ fontSize: 30 }} />}
                </IconButton>    
            </Tooltip>
        </div>
    )
}

export default SidebarRow;