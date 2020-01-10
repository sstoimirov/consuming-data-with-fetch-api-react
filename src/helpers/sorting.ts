export const sortUsers = {
    ASC: (a, b) => { return a.name.localeCompare(b.name) },
    DESC: (a, b) => { return b.name.localeCompare(a.name) }
}
export const sortTodos = {
    ASC: (a, b) => { return a.id - b.id },
    DESC: (a, b) => { return b.id - a.id }
}