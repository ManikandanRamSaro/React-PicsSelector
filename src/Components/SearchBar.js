import React from 'react'

export default class SearchBar extends React.Component{

    state = { search:''}

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.search} onChange={(e)=> {this.setState({search:e.target.value})}}/>
                        {/* <input type="text" onChange={this.onTextInputChange() -> this will call on readering a component so awoid it}/> */}
                    </div>
                </form>
            </div>
        );
    }
}