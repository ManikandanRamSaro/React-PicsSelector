import React from 'react'

export default class SearchBar extends React.Component{

    state = { search:''}

    // constructor()
    // {
    //     super();
    //     this.formSubmit = this.formSubmit.bind(this);  // using this line we will solve "state" undefined in 1 way another way is using arrow function
    // }

    formSubmit(event)
    { 
        event.preventDefault();
       // console.log(this.state.search);
        this.props.onSubmitting(this.state.search);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(event)=> this.formSubmit(event)}>    {/* onSubmit={(event)=> this.formSubmit(event)} -> this also used to avoid "state" undefined issues*/}              
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