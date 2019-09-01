
let initialState  = {     
    head:[
        [-122.23, 37.88, 41.0, 880.0, 129.0, 322.0, 126.0, 8.3252,452600.0, 'NEAR BAY'],
        [-122.22, 37.86, 21.0, 7099.0, 1106.0, 2401.0, 1138.0, 8.3014,358500.0, 'NEAR BAY'],
        [-122.24, 37.85, 52.0, 1467.0, 190.0, 496.0, 177.0, 7.2574,352100.0, 'NEAR BAY'],
        [-122.25, 37.85, 52.0, 1274.0, 235.0, 558.0, 219.0, 5.6431,341300.0, 'NEAR BAY'],
        [-122.25, 37.85, 52.0, 1627.0, 280.0, 565.0, 259.0, 3.8462,342200.0, 'NEAR BAY']
    ],
    description:[
        {'name': 'longitude', 'data': [20640, -119, 2, -124, -121, -118, -118, -114]},
        {'name': 'latitude', 'data': [20640, 35, 2, 32, 33, 34, 37, 41]},
        {'name': 'housing_median_age', 'data': [20640, 28, 12, 1, 18, 29, 37, 52]},
        {'name': 'total_rooms','data': [20640, 2635, 2181, 2, 1447, 2127, 3148, 39320]},
        {'name': 'total_bedrooms', 'data': [20433, 537, 421, 1, 296, 435, 647, 6445]},
        {'name': 'population','data': [20640, 1425, 1132, 3, 787, 1166, 1725, 35682]},
        {'name': 'households', 'data': [20640, 499, 382, 1, 280, 409, 605, 6082]},
        {'name': 'median_income', 'data': [20640, 3, 1, 0, 2, 3, 4, 15]},
        {'name': 'median_house_value','data': [20640, 206855, 115395, 14999, 119600, 179700, 264725, 500001]}
    ],
    file_name:"file.csv"
}

export default function(state=initialState,action){
        switch(action.type){
            case "OVERVIEW":
                return action.payload
            default:
                return state
        }
    }