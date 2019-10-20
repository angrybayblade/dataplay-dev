let regState=[
    {"dtype":"int64","name":"PassengerId","nullvals":0,"nunique":891,"type":"num"},
    {"dtype":"int64","name":"Survived","nullvals":0,"nunique":2,"type":"cat"},
    {"dtype":"int64","name":"Pclass","nullvals":0,"nunique":3,"type":"cat"},
    {"dtype":"object","name":"Name","nullvals":0,"nunique":891,"type":"num"},
    {"dtype":"object","name":"Sex","nullvals":0,"nunique":2,"type":"cat"},
    {"dtype":"float64","name":"Age","nullvals":177,"nunique":88,"type":"num"},
    {"dtype":"int64","name":"SibSp","nullvals":0,"nunique":7,"type":"cat"},
    {"dtype":"int64","name":"Parch","nullvals":0,"nunique":7,"type":"cat"},
    {"dtype":"object","name":"Ticket","nullvals":0,"nunique":681,"type":"num"},
    {"dtype":"float64","name":"Fare","nullvals":0,"nunique":248,"type":"num"},
    {"dtype":"object","name":"Cabin","nullvals":687,"nunique":147,"type":"num"},
    {"dtype":"object","name":"Embarked","nullvals":2,"nunique":3,"type":"cat"}
]

let claState = [
{   dtype: "float64",
    name: "longitude",
    nullvals: 0,
    nunique: 844,
    type: "num"
},
{
    dtype: "float64",
    name: "latitude",
    nullvals: 0,
    nunique: 862,
    type: "num",
},
{
    dtype: "float64",
    name: "housing_median_age",
    nullvals: 0,
    nunique: 52,
    type: "num",
},
{
    dtype: "float64",
    name: "total_rooms",
    nullvals: 0,
    nunique: 5926,
    type: "num"
},
{
    dtype: "float64",
    name: "total_bedrooms",
    nullvals: 207,
    nunique: 1923,
    type: "num",
},
{
    dtype: "float64",
    name: "population",
    nullvals: 0,
    nunique: 3888,
    type: "num",
},
{
    dtype: "float64",
    name: "households",
    nullvals: 0,
    nunique: 1815,
    type: "num",
},
{
    dtype: "float64",
    name: "median_income",
    nullvals: 0,
    nunique: 12928,
    type: "num",
},
{
    dtype: "float64",
    name: "median_house_value",
    nullvals: 0,
    nunique: 3842,
    type: "num",
},
{
    dtype: "object",
    name: "ocean_proximity",
    nullvals: 0,
    nunique: 5, 
    type: "cat",
}
]

 export default function(state=claState,action){
    //  console.log(state,action)
    switch(action.type){
        case "COLUMNS":
            return action.payload
        default:
            return state
    }
}
