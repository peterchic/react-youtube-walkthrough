import React, {Component} from 'react'
import { FormGroup, FormControl, Navbar, Button } from 'react-bootstrap'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e){
    console.log('changed', e.target.value);
    this.setState({ input: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleChange(this.state.input)
  }

  render(){
    return(
      <Navbar>
        <div className="col-lg-2">
          <img id='logo' src={'vision_logo.png'}/>
        </div>
        <div id='search' className='col-lg-10'>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <div className="input-group">
                <FormControl className='form-control' type='text' name='search' placeholder='Search Videos' onChange={this.handleSearch} />
                <span className="input-group-btn">
                  <button type='submit' className='btn btn-default'>
                    <span className='glyphicon glyphicon-search'></span>
                  </button>
                </span>
              </div>
            </FormGroup>
          </form>
        </div>
      </Navbar>
    )
  }
}
