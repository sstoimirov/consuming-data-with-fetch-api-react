import { sortUsers, sortTodos } from "./sorting";

describe("sorging function", () => {
    it("sorts strings", () => {
        let firstUser = {
            name: "Aston"
        }
        let secondUser = {
            name: "Zack"
        }
        expect(sortUsers.ASC(firstUser, secondUser)).toEqual(-1)
        expect(sortUsers.DESC(firstUser, secondUser)).toEqual(1)
    })

    it("sorts numbers", () => {
        let firstUser = {
            id: 1,
            name: "Aston"
        }
        let secondUser = {
            id: 2,
            name: "Zack"
        }
        expect(sortTodos.ASC(firstUser, secondUser)).toEqual(-1)
        expect(sortTodos.DESC(firstUser, secondUser)).toEqual(1)
    })
})