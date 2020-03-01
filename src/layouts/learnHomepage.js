import React, { Component } from 'react';
import Header from '../components/general/header';
import Footer from '../components/general/footer';
import SearchCourse from '../components/learn/search';
import CourseCategory from '../components/learn/courseCategories';
import ContributeToCourse  from '../components/learn/contributeToCourse';

export default class LearnHomepage extends Component {
    render() {
        return (
            <div>
              <Header /> 
              <br />
              <SearchCourse />
              <br />
              <CourseCategory />
              <br />
              <ContributeToCourse />
              <br />
              <Footer /> 
            </div>
        )
    }
}
