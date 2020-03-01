import React, { Component } from 'react';
// import {Link, Redirect} from 'react-router-dom';

export class SearchCourse extends Component {
    render() {
        return ( 
        <div className = "container-fluid">
			<div className="search-warp">
				<div className="section-title text-white">
					<h2>Search your course</h2>
				</div>
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<form className="course-search-form">
							<input type="text" placeholder="Course" />
                            <select>
                                <option>Select Language</option>
                                <option>Kinyarwanda</option>
                                <option>Lingala</option>
                                <option>Swahili</option>
                                <option>Ikirundi</option>
                                <option>Luganda</option>
                                <option>Senegalize</option>
                                <option>ivoriene</option>
                            </select>
							<button className="site-btn">Search Couse</button>
						</form>
					</div>
				</div>
			</div>
		</div>);
    }
}

export default SearchCourse;