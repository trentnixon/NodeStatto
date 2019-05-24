import React from 'react';
import Autosuggest from 'react-autosuggest';
import {FetchSelectedTeam} from "../../../actions/Login"

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value,Teams) => {

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

  return inputLength === 0 ? [] : Teams.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);
 
let Filter=[];
export default class AutoComplete extends React.Component{
  constructor() {
    super();
 
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
   
    this.setState({
      suggestions: getSuggestions(value,Filter)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  createArray(TeamList){
    Filter=[];

    TeamList.map((team,i)=>{
        Filter.push({"name":team[0], "id":team[1]})
    })  
    return Filter;  
  }

  onSuggestionSelected(e,v){
    console.log(v.suggestion);
    FetchSelectedTeam(v.suggestion)
  }
  render() {
    const { value, suggestions } = this.state;
   // console.log(this.props.LOGIN)
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Select a Team',
      value,
      onChange: this.onChange
    };
    this.createArray(this.props.LOGIN.LOGINDATA)
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />
    )
  }
}