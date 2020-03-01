import React, { Component } from 'react';
// import logo from '../../assets/SomaLogo0.png';
// import {Link, Redirect} from 'react-router-dom';

export class CourseCategory extends Component {
    render() {
        return ( 
            <div className="container-fluid">
			<div className="section-title">
				<h2>Supported Language Course</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" data-setbg="img/categories/1.jpg"></div>
						<div className="ci-text">
							<h5>Learn Kinyarwanda</h5>
							<p>Lorem ipsum dolor sit amet, consectetur</p>
							<span>120 Courses</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" data-setbg="img/categories/2.jpg"></div>
						<div className="ci-text">
							<h5>Learn Ikirundi</h5>
							<p>Lorem ipsum dolor sit amet, consectetur</p>
							<span>70 Courses</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" data-setbg="img/categories/3.jpg"></div>
						<div className="ci-text">
							<h5>Learn Lingala</h5>
							<p>Lorem ipsum dolor sit amet, consectetur</p>
							<span>55 Courses</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" data-setbg="img/categories/4.jpg"></div>
						<div className="ci-text">
							<h5>Learn Swahili</h5>
							<p>Lorem ipsum dolor sit amet, consectetur</p>
							<span>40 Courses</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" data-setbg="img/categories/5.jpg"></div>
						<div className="ci-text">
							<h5>Learn Luganda</h5>
							<p>Lorem ipsum dolor sit amet, consectetur</p>
							<span>220 Courses</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" data-setbg="img/categories/6.jpg"></div>
						<div className="ci-text">
							<h5>Learn Senegalize</h5>
							<p>Lorem ipsum dolor sit amet, consectetur</p>
							<span>25 Courses</span>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default CourseCategory;