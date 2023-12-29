export const increment = () => ({
    type: "INCREMENT" 
})

export const decrement = () => ({
    type: "DECREMENT" 
})

export const clear = () => ({
    type: "CLEAR"
})

// ДОбавляем оценку
export const ADD_GRADE = 'ADD_GRADE';

export function addGrade (index, grade) {
    return {
        type: ADD_GRADE,
        index,
        grade
    }
}