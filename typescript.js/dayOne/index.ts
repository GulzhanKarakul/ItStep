const createPassword = (name: string, age?: number) => `${name}${age}`

console.log(createPassword('Jack'))