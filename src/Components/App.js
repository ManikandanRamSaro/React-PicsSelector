import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{

    async onSearchSubmit(search)
    {
        console.log(search,'getting value form child component');
       const output = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query:search
            },
            headers:{
                Authorization: 'Client-ID PBGi7Q5g1Ar9-XfoWiPp6i9sy9Jbxp0BKQaIt82dl1w'
            }
        });

        console.log(output.data.results);
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