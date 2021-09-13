import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Anime from './Anime';
import Sports from './Sports';
import Movies from './Movies';

const Welcome=() => {
    

        function Content(){

        const data= JSON.stringify(localStorage.getItem('name'))
        const name=data.replace('"','')
        const username = name.replace('"','')

            let history = useHistory();
        const clickAnimeHandler = () => history.push("./Anime");
        const clickMoviesHandler= () =>history.push("./Movies");
        const clickSportsHandler = () => history.push("./Sports");
        
        return(
            <div>
        <h1>Make Your Pick Category {username}</h1>
        <button onClick={clickAnimeHandler}>Anime</button>
        <button onClick={clickMoviesHandler}>Movies</button>
        <button onClick={clickSportsHandler}>Sports</button>
      </div>
        )
        }

    return(
        <div>
        
         <Router>
             <Switch>
                <Route path="/Sports" exact component={Sports}/>
                <Route path="/Anime" exact component={Anime}/>
                <Route path="/Movies" exact component={Movies}/>
                <Route path= "/"  component = {Content}/>
             </Switch>
         </Router>
        </div>
    )

}
    
export default Welcome;
