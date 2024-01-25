import React from 'react'
const Input = () => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="input-field col s9">
                    <input placeholder="type your message here " id="first_name" type="text" className="validate" />
                </div>
                <div className="input-field col s3">
                    <button className="btn waves-effect waves-light btn-small indigo btn-block" type="button"><i className="material-icons white-text">send</i></button>
                </div>
            </div>
        </div>

    )
}

export default Input
