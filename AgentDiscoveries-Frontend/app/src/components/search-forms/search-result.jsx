import * as React from 'react';
// import {Panel} from 'react-bootstrap';

export default class SearchResult extends React.Component {

    render() {
        return (
            <div className='results'>
                {this.getResultsHeader(this.props.results)}
                {this.props.results.length?<table className="table">
                    <thead>
                        <tr>
                            <th>Location Id</th>
                            <th>Report Id</th>
                            <th>Status</th>
                            <th>Report Time</th>
                            <th>Report Body</th>
                            <th>Agent ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderResults(this.props.results)}
                    </tbody>
                </table>:null}
            </div>
        );
    }

    renderResults(results) {
        return results.map((result) => {
            return (
                <tr key={0}>{this.renderResultBody(result)}</tr>
            );
        });
    }

    renderResultBody(result) {
        return Object.keys(result).map(key => {
            return <td key={key} id={key}>{`${result[key]}`}</td>;
        });
    }

    getResultsHeader(results) {
        return results.length > 0
            ? (results.length === 1
                ? <tr>{`${results.length} result`}</tr>
                : <tr>{`${results.length} results`}</tr>)
            : '';
    }
}
