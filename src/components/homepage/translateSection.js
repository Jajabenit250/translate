import React, { Component } from 'react'

export default class TranslateSection extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <br />
                <div className="row ">
                    <div className="col col-lg-6 d-none d-lg-block d-xl-block">
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <form className="form-inline">
                                    <select className="custom-select" id="inlineFormCustomSelectPref">
                                        <option selected>English... </option>
                                        <option value="1">Swahili </option>
                                        <option value="2">Kinyarwanda </option>
                                        <option value="2">Ikirundi </option>
                                        <option value="3">Lingala </option>
                                    </select> 
                                </form>
                                <div class="form-group">
                                    <textarea class="form-control noresize" id="exampleFormControlTextarea1" rows="14"></textarea>
                                </div>
                            </div>
                            <div className="col">
                                <form className="form-inline">
                                        <select className="custom-select" width="100" id="inlineFormCustomSelectPref">
                                        <option selected>Swahili...</option>
                                        <option value="1">English</option>
                                        <option value="2">Kinyarwanda </option>
                                        <option value="2">Ikirundi</option>
                                        <option value="3">Lingala</option>
                                        </select> 
                                </form>
                                <div class="form-group">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="14"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
