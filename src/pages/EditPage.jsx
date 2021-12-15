import React, {useContext} from 'react'
import { ContentContext } from '../context'
import {useParams, Link} from 'react-router-dom'
import App from '../App'
import "./EditPage.module.css"
function EditPage() {
        const {content, setContent} = useContext(ContentContext)
        const {id} = useParams()
        
        function deleteItem(){
            console.log("yeah")
            setContent(content.filter(item => item.id != id))
        }


        return (
            <div className="">
        <div className='pure-g'>
            <div className="pure-u-1-5">
                <ul>
                    <li className='menu-li'> 
                        <Link to="/" className='my-btn'><button className='button-error' onClick={deleteItem}>Удалить</button></Link>
                        
                    </li>
                    <li className='menu-li'>
                        <Link className='button-success my-btn' to="/">Отмена</Link>
                    </li>
                </ul>
            </div>
            <div className="pure-u-3-5 pic">
               <img src=
                    {content.filter(item => item.id == id)[0].url}
                alt="" />
            </div>
            <div className="pure-u-1-5">

            </div>

        </div>
      

     
    </div>   
        )

}

export default EditPage
