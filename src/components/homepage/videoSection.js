import React, { Component } from 'react'

export default class VideoSection extends Component {
    render() {
        return (
        <div className="container">
             <br />
              <div className="row">
                <div class="col">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AeK3hfgC4XY" allowfullscreen></iframe>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QdbFmFxYC-c" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col">
                        <div className="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/nhOkMD364aE" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col col-lg-3 d-none d-lg-block d-xl-block">
                </div>
            </div> 
            <br />
        </div>
        )
    }
}
