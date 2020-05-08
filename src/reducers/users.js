export default function users(state = [], action = {}) {
    switch(action.type) {
        case 'USER_ADD':
            console.log("welcome user add from reducer")
            return [
                ...state,
                action.data
            ];
        case 'ERROR_ADDING':
            console.log("you are here azzeddine error failed with action data here")
            console.log(action.data)
        default: return state;
    }
}