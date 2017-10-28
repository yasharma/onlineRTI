import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import Http from '../../lib/Http';
class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
			slug:'',
			suggestions: [],
			categories: [],
			isLoading: false
		}
	}
	loadSuggestions(value) {
		this.setState({suggestions: this.getMatchingLanguages(value) });
	}
	componentDidMount() {
		this.setState({isLoading: true });
        Http.get('list-categories')
        .then(({data}) => this.setState({categories: data, isLoading: false}))
        .catch(errors => console.log(errors));
    }
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
	escapeRegexCharacters(str) {
  		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
    getMatchingLanguages(value) {
    	const {categories} = this.state;
  		const escapedValue = this.escapeRegexCharacters(value.trim());
  		if (escapedValue === '') {
    		return [];
  		}
  		const regex = new RegExp(`^${escapedValue}`, 'i');
  		return categories.filter(category =>  regex.test(category.title) );
	}
	getSuggestionValue(suggestion) {
  		return suggestion.title;
	}
	onChange = (event, {newValue}) => {
		this.setState({value: newValue});
	}
	onSuggestionsFetchRequested = ({value}) => {
		this.loadSuggestions(value);
	}
	onSuggestionsClearRequested = () => {
    	this.setState({
      		suggestions: []
    	});
  	}
  	onSuggestionSelected = (event, {suggestion}) => {
  		const {slug} = suggestion;
  		this.setState({slug});
  	}
	render() {
		const { value, suggestions, isLoading } = this.state;
		const inputProps = {
      		placeholder: 'Search for RTI types -  Eg: Exam Copy',
      		className: "form-control",
      		value,
      		disabled: isLoading,
      		onChange: this.onChange
    	};
    	const getSuggestionValue = suggestion => suggestion.title;
    	const renderSuggestion = suggestion => (
		  	<div>
		    	{suggestion.title}
		  	</div>
		);
		return (
			<div className="search-form">
				<Autosuggest
			        suggestions={suggestions}
			        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
			        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
			        onSuggestionSelected={this.onSuggestionSelected}
			        getSuggestionValue={getSuggestionValue}
			        renderSuggestion={renderSuggestion}
			        inputProps={inputProps}
			      />
			    <button type="button" onClick={() => this.handleClick()} className="btn btn-info search-btn">Search</button> 
			</div>
		);
	}
	handleClick() {
		const {slug} = this.state;
		const {history} = this.props;
		if( slug ) {
			history.push(`/apply/${slug}`);
		}
	}
}

export default SearchForm;