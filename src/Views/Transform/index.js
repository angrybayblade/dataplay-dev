import React from 'react';

const Transform = (props) =>{
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
                                    Select Label
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
                                    Select Feature
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
                                    Select Method
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
                                Save
                            </div>
                        </div>
                        <div className="overview-col">
                            <div className="table-cont">
                                Cont
                            </div>
                            <div className="table-cont">
                                Cont
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transform;