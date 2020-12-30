import React from 'react'

export default class SearchBar extends React.Component{

    onTextInputChange(event)
    {
        console.log(event.target.value)
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onTextInputChange}/>
                        {/* <input type="text" onChange={this.onTextInputChange() -> this will call on readering a component so awoid it}/> */}
                    </div>
                </form>
            </div>
        );
    }
}