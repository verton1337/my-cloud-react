import React from 'react'
import ContentItem from './ContentItem'

const ContentList = ({props}) => {

    return (
        props.map((item)=> <ContentItem props={item} key = {item.id} />)
    )
}

export default ContentList
