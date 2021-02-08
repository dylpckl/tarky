import { Avatar, IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title }) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {/* {Icon && <Icon />} */}
            <Tooltip title={title} placement="right">
                <IconButton>
                    {Icon && <Icon />}
                </IconButton>    
            </Tooltip>
        </div>
    )
}

export default SidebarRow;