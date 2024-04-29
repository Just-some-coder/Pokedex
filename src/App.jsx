 import {Fragment, useState} from "react";
import './App.css'

 function PokemonInfo(){
    return (
        <Fragment>
            <div className="description">
                <p>This is A Pokemon</p>
            </div>

            <div className="pokemonType">
                <ul>
                    <li>Grass</li>
                </ul>
            </div>

            <div className="bodyInfo">
                <div>
                    <h2>Height: 20foot</h2>
                </div>

                <div>
                    <h2>Weight: 20foot</h2>
                </div>
            </div>

            <div className="genderInfo">
                <label>Gender</label>
                <h2>Male: 50% , Female: 50%</h2>
            </div>
        </Fragment>
    );
 }

 function Stats(){
    return(
        <Fragment>
            <ul>
                <li>Attack <progress value={90}/></li>
                <li>Attack <progress value={90}/></li>
                <li>Attack <progress value={90}/></li>
                <li>Attack <progress value={90}/></li>
                <li>Attack <progress value={90}/></li>
                <li>Attack <progress value={90}/></li>
                <li>Attack <progress value={90}/></li>
            </ul>
        </Fragment>
    );
 }

 function Moves(){
    return(
        <Fragment>
            <h1>Attack 1</h1>
            <h1>Attack 1</h1>
            <h1>Attack 1</h1>
            <h1>Attack 1</h1>
        </Fragment>
    );
 }

 function Evolutions(){
    return(
        <Fragment>

        </Fragment>
    );
 }

 function App() {
     return (
         <div className={"main"}>
             <div className={"pokedex"}>
                 <div className={"pokeID"}>
                     <h3>#001</h3>
                 </div>

                 <div className={"artTop"}>
                     <div className={"dots"}></div>
                     <div className={"dots"}></div>
                 </div>

                 <div className={"pokemonImage"}>
                     <img
                         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"/>
                 </div>

                 <div className={"artBottom"}>
                     <div className={"dots"}></div>
                     <div className={"lines"}>
                        <hr/>
                        <hr/>
                        <hr/>
                    </div>
                </div>
            </div>

            <div className={"pokemonInfo"}>
                <div className="selection">
                    <ul>
                        <li className="info-selected">About</li>
                        <li>Stats</li>
                        <li>Moves</li>
                        <li>Evolutions</li>
                    </ul>
                </div>

                <div className="info">
                    {/*<PokemonInfo/>*/}
                    {/*<Stats/>*/}
                    {/*<Moves/>*/}
                </div>
            </div>
        </div>

    );
}

 export default App;