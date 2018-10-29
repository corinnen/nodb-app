import React, { Component } from 'react'
import './ListCard.css'

class ListCard extends Component {
    constructor () {
        super ()
        this.state =  {
            title: '',
            edit: false
        }
        this.handleListChange = this.handleListChange.bind(this)

    } 

    componentDidMount() {
        this.setState({title: this.props.list.title})
    }

    handleListChange(e) {
        this.setState({title: e.target.value})
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }
    

    render () {
        console.log(this.state.edit)
        return (
            <div>
                {this.state.edit ?

                (
                    <div>
                        <input value= {this.state.title} type='text' onChange={this.handleListChange}/>
                        <button onClick={() => {
        // semi-colon?     
                      this.props.updateList(this.state.title,this.props.list.id);this.toggleEdit()} }>Add</button >
                        <button onClick={this.toggleEdit}>Remove </button>
                   
                    </div>
                ) :
                (    
                    <div>
                        {this.props.list.title}
                        <button id='edit'onClick={this.toggleEdit}>Edit
                        </button >
                        <button onClick={() => this.props.deleteItem(this.props.list.id)}>✓
                        </button>
                    </div>
                )   
            }   
            </div>
        )
    }
}
export default ListCard