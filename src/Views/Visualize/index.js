import React from 'react';

const Visualize = (props) =>{
    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col">
                            <div className="selector-row chart-row">
                                <div className="selector-label flex-center">
                                    X
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
                            <div className="selector-row chart-row">
                                <div className="selector-label flex-center">
                                    Y
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
                            <div className="selector-row chart-row">
                                <div className="selector-label flex-center">
                                    Chart
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
                                Plot
                            </div>
                        </div>
                        <div className="overview-col">
                            <div className="table-cont chart-cont">
                                Cont
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualize;