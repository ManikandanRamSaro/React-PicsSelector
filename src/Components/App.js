import React from 'react';
import unsplash from '../Api/unsplashaxios'
import SearchBar from './SearchBar'

class App extends React.Component{

    state ={ images:[] }
    // below line is also one of the way to perform arrow function with the method
    onSearchSubmit = async searchKey =>  {
        //console.log(searchKey,'getting value form child component');  // async and await -> getting response from api and parse the api output into simpler form without using then() 
       const output = await unsplash.get('/search/photos',{
            params:{
                query:searchKey
            }
        });

        this.setState({images:output.data.results}) 
    }
    render()
    {
        return(
            <div>
                <div className="ui container" style={{marginTop:'10px'}}>
                        <SearchBar onSubmitting={this.onSearchSubmit}/>
                        <hr/>
                        Images Found : {this.state.images.length}
                    </div>
            </div>
        );
    }
}
 

export default App;