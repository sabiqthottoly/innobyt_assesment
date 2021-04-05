import React from 'react'

function CustomButton(props){
    return(
        <div
            onClick={props.onClick} 
            className={props.outline ? 'cus-button-outline' : 'cus-button-filled'}
        >
            {props.children}
        </div>
    )
}

export default CustomButton