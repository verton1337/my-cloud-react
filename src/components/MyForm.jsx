import React from 'react'

function MyForm() {

    function toggleVisible(){
        setIsVisible(!isVisible)
    }

    let [isVisible, setIsVisible] = React.useState(false)
    return (
        <div>
        <a  href="#" className="pure-button button-success" id="add-file-btn" onClick={toggleVisible}>Добавить файл</a>
                {isVisible &&
                    <div className="addfile-form" id="addfile-form">
                        <form className="pure-form">
                            <fieldset>
                                <label className="custom-file-upload">
                                    
                                <input type="file" />
                                Выберите файл...
                                </label>
                                <button type="submit" className="pure-button pure-button-primary button-success">Добавить</button>
                            </fieldset>
                        </form> 
                    </div> 
                }
        </div>
           

    )
}

export default MyForm
