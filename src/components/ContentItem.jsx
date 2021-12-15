import React from 'react'
import classes from './ContentItem.module.css'
import {Link} from 'react-router-dom'


const ContentItem = ({props}) => {



    return (
        <div  className="pure-u-1-4 showed-element">
                   <Link to={"/edit/" + props.id} >
                       <img className={classes.myImg} src={props.url} alt="" />   
                    </Link>
                             
        </div>
    )
}

export default ContentItem
