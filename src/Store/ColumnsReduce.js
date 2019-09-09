let initState=[
    {'name': 'longitude', 'type': 'num', 'nunique': 844.0, 'dtype': 'float64', 'nullvals': 0.0},
    {'name': 'latitude', 'type': 'num', 'nunique': 862.0, 'dtype': 'float64', 'nullvals': 0.0}, 
    {'name': 'housing_median_age', 'type': 'num', 'nunique': 52.0, 'dtype': 'float64', 'nullvals': 0.0}, 
    {'name': 'total_rooms', 'type': 'num', 'nunique': 5926.0, 'dtype': 'float64', 'nullvals': 0.0}, 
    {'name': 'total_bedrooms', 'type': 'num', 'nunique': 1923.0, 'dtype': 'float64', 'nullvals':207.0}, 
    {'name': 'population', 'type': 'num', 'nunique': 3888.0, 'dtype': 'float64', 'nullvals': 0.0}, 
    {'name': 'households', 'type': 'num', 'nunique': 1815.0, 'dtype': 'float64', 'nullvals': 0.0}, 
    {'name': 'median_income', 'type': 'num', 'nunique': 12928.0, 'dtype': 'float64', 'nullvals': 0.0}, 
    {'name': 'median_house_value', 'type': 'num', 'nunique': 3842.0, 'dtype': 'float64', 'nullvals': 0.0}, 
    {'name': 'ocean_proximity', 'type': 'cat', 'nunique': 5.0, 'dtype': 'object', 'nullvals': 0.0}
]

 export default function(state=initState,action){
    switch(action.type){
        case "COLUMNS":
            return action.payload
        default:
            return state
    }
}
