const hello = name =>{
    if (!name) {
        throw new Error('Name is required')
    }

    return `Hello ${name}`
}

console.log(hello('budi', 'daus'))