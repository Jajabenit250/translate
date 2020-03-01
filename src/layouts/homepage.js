import React, { Component } from 'react';
import Header from '../components/general/header';
import Footer from '../components/general/footer';
import TranslateSection from '../components/homepage/translateSection';
import VideoSection from '../components/homepage/videoSection';
export default class Homepage extends Component {
    render() {
        return (
            <div>
              <Header /> 
              <TranslateSection />
              <VideoSection />
              <Footer /> 
            </div>
        )
    }
}
