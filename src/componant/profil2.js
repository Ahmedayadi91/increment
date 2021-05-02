// import src from '*.avif'
import React, { Component } from 'react'
import raccord from '../raccord.jpg'

export default class profil2 extends Component {
    constructor() {
        super()
        this.state = {
            User: ' ',
            job: ' ',
            Bio: ' ',
            Photo: ' '
        }
    }
    Afficher = () => {
        this.setState({
            User: 'Majd ',
            Job: "| informaticien ",
            Bio: 
            "|| Bio : La meilleure revanche c'est de passer à autre chose et de continuer à réussir." ,          
            Photo: {raccord}
        })
        // this.setState ({
        //     job: <Profession job = 'teacher' />
        // })
    }
    render() {
        return (
            <div>
                <h1>  {this.state.User} {this.state.Job} {this.state.Bio} </h1>
                <button onClick={this.Afficher}> User </button> 
            </div>
        )
    }
}
