import React, {Component} from 'react'
import axios from 'axios';
import './quoteoftheday.css'

class Quote extends Component{
    constructor (){
        super();
    

        this.state = {
            quote: [],
            author: ''
    }
    }

    componentDidMount(){
        axios.get('https://talaikis.com/api/quotes/random/').then (results => {
            this.setState({quote: results.data.quote, author: results.data.author})
          }).catch(err => console.log('No quote displayed'));
    }
    render (){
        return (
            <div>
                <h3> {this.state.quote}  --  {this.state.author}

                </h3>
            </div>
        )
    }

}







export default Quote;

