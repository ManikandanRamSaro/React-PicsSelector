import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component{

    onSearchSubmit(search)
    {
        console.log(search,'getting value form child component');
    }
    render()
    {
        return(
            <div>
                <div className="ui container" style={{marginTop:'10px'}}>
                        <SearchBar onSubmitting={this.onSearchSubmit}/>
                    </div>
            </div>
        );
    }
}
 

export default App;