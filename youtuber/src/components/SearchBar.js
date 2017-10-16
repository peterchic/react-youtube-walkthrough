import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e){
    const input = e.target.value
    console.log(input);
    this.setState({
      input: input
    })
  }
  render() {
    console.log(this.props.handleChange);
    return(
      <div>
        <h1>Hello</h1>
        <input onChange={this.onInputChange} placeholder="search"/>
        <button className='btn btn-primary' type='submit'>Search</button>
      </div>
    )
  }
}
