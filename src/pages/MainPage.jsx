
import React, { useContext } from 'react'
import ContentList from '../components/ContentList'
import { ContentContext } from '../context'


function MainPage() {
        const {content, useContent} = useContext(ContentContext)

        return (
            <div className="main">
                <div className="content pure-g">
                <ContentList props = {content}/>
                </div>

     
            </div>
        )

}

export default MainPage
