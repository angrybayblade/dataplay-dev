import React from 'react';

const Train = (props) =>{
    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col">
                            <div className="selector-row">
                                <div className="selector-label flex-center">
                                    Algorithm
                                </div>
                                <div className="selector-input flex-center">
                                    <select>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            1
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="selector-row">
                                <div className="selector-label flex-center">
                                    Hyper Params
                                </div>
                                <div className="selector-input flex-center">
                                    <select>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            1
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="selector-btn">
                                Train
                            </div>
                        </div>
                        <div className="overview-col">
                            <div className="table-cont">
                                MSE/Confusion Matrix
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Train;