export const countReducer = (state = { count: 0,  students: []}, action) =>{
    if(!action) return state;
    switch (action.type) {
        case "INCREMENT" :
            return{count: state.count+1};
        case "DECREMENT":
            return{count: state.count-1};
        case "CLEAR":
            return{count: 0};

        case 'ADD_GRADE': 
            let lastStudents = state.students;
            console.log(lastStudents)
            console.log(action)
            lastStudents.push([
                action.index,
                action.grade,
            ])
            console.log(lastStudents)
            return { students: lastStudents };
        default:
            return state;
    }
}