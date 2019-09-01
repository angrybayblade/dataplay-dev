import {combineReducers} from 'redux'
import Overview from './OverviewReduce'
import Columns from './ColumnsReduce'

const reducers = combineReducers({
    overview:Overview,
    columns:Columns
})

export default reducers;