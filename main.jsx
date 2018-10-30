 /**
   * @jsx React.DOM
 */


//Making the main component, InstantBox
var InstantBox = React.createClass({
	doSearch:function(queryText, searchFieldNm){
		console.log(queryText)
		//get query result
		var queryResult=[];
		if (searchFieldNm == 'input1')
		{
		alert("Hi");
		this.props.data.forEach(function(person)
		{
		 	if(person.name.toLowerCase().indexOf(queryText)!=-1)
		  	    queryResult.push(person);
		});
		}
		else
		{
		
		this.props.data.forEach(function(person)
				{
				 	if(person.roll.toLowerCase().indexOf(queryText)!=-1)
				  	    queryResult.push(person);
		});
		
		}
		
		
		
		this.setState({
			query:queryText,
			filteredData: queryResult
		})
	},
	getInitialState:function(){
		return{
			query:'',
			filteredData: ''
		}
	},
	render:function(){
		return (
			<div className="InstantBox">
			<h2>Search</h2>
			<table><tr><td>
				<SearchBox query={this.state.query} doSearch={this.doSearch}/>
			</td>
			<td>
				<SearchAcBox  query={this.state.query} doSearch={this.doSearch}/>
			</td>
			</tr>
			<tr>
			<td colspan="2">
				<DisplayTable data={this.state.filteredData}/>
			</td></tr></table>
			</div>
		);
	}
});

var SearchBox = React.createClass({
	doSearch:function(){
		var query=this.refs.searchInput.getDOMNode().value; // this is the search text
		var searchBoxName=this.refs.searchInput.getDOMNode().name; // this is the search text
		this.props.doSearch(query, searchBoxName);
	},
	render:function(){
		return <input type="text" ref="searchInput" name="input1" placeholder="Search Bene Name" value={this.props.query} onChange={this.doSearch}/>
	}
});

var SearchAcBox = React.createClass({
	doSearch:function(){
		var query=this.refs.searchInput.getDOMNode().value; // this is the search text
		var searchBoxName=this.refs.searchInput.getDOMNode().name; // this is the search text
		this.props.doSearch(query, searchBoxName);
	},
	render:function(){
		return <input type="text" ref="searchInput" name="input2" placeholder="Search AcNumber" value={this.props.query} onChange={this.doSearch}/>
	}
});

var DisplayTable = React.createClass({
	render:function(){
		//making the rows to display
		var rows=[];
		if (this.props.data.length > 0) 
		{
		this.props.data.forEach(function(person) {
				rows.push(<tr><td>{person.name}</td><td>{person.roll}</td></tr>)
		});
		//returning the table
		return(
			 <table>
                <thead>
                    <tr>
                        <th>Bene Name</th>
                        <th>Bene AcNo</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            );
            } // if brace.
            else
            {
            //returning the table
	    		return(
	    		   <table>
	    		   <tr><td>
	                    <thead>
	                        <tr>
	                            <th>Bene Name</th>
	                            <th>Bene AcNo</th>
	                        </tr>
	                    </thead>
	                    </td>
	                    </tr>
	                    <tr>
	                    <td>
	                    No records 
	                    </td>
	                    </tr>
            </table>
	);
} // else		
	}
});

 
React.renderComponent(<InstantBox data={tableData}/>,document.body);
