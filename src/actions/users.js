import axios from 'axios';

export function saveUser(data) {
    return dispatch => {
        console.log("here call to api for add user");
        axios.post('/api/register', data)
            .then(response => {
                return dispatch({
                    type: 'USER_ADD',
                    data: response.data.data
                });
            })
            .catch(error => {
                console.log('catched error here azzeddine dispatch');
                return dispatch({
                    type: 'ERROR_ADDING',
                    data: 'bastos error '
                });
            });
    }
}