console.log(window.Redux);

const { createStore } = window.Redux;

const initState = JSON.parse(localStorage.getItem('hobby_list')) || [];
const hobbyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            {
                const newList = [...state];
                newList.push(action.payload);
                return newList;
            }
        default:
            return state;
    }
}

const store = createStore(hobbyReducer);


const renderHobbyList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hobbyListId');
    if (!ulElement) return;

    ulElement.innerHTML = '';
    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;
        ulElement.appendChild(liElement);
    }
}

// render
const initHobbyList = store.getState();
renderHobbyList(initHobbyList);

//handle form 
const hobbyFormElement = document.querySelector("#hobbyFormId");
if (hobbyFormElement) {
    const handleFormSubmit = (e) => {
        //prevent re-loading
        e.preventDefault();
        const hobbyTextElement = hobbyFormElement.querySelector("#hobbyTextId");
        if (!hobbyTextElement) return;
        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyTextElement.value
        }
        store.dispatch(action);
    };
    hobbyFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
    console.log("Update", store.getState());
    const newHobbyList = store.getState();
    renderHobbyList(newHobbyList);
    localStorage.setItem('hobby_list', JSON.stringify(newHobbyList));
})