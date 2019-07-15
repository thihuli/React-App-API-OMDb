import React from 'react'
import './style.css'


class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log(this.state.value)
      console.log(Search)
      event.preventDefault();
    }
  
    render() {
      return (
          <div className='formSubmit'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Movie:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Pesquisar"/>
          </form>
          </div>
      
      );
    }
  }

  export default Search

