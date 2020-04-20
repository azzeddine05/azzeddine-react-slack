export default function users(state = [], action = {}) {
    switch(action.type) {
        case 'USER_ADD':
            console.log("welcome user add from reducer")
            return [
                ...state,
                action.data
            ];

        default: return state;
    }
}