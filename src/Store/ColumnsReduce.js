let initState=[
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
 export default function(state=initState,action){
     console.log(state,action)
    switch(action.type){
        case "COLUMNS":
            return action.payload
        default:
            return state
    }
}
