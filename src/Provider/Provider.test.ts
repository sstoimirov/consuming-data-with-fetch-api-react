import * as fetch from "jest-fetch-mock";
import { Provider } from "./Provider";
describe("Provider", () => {
    const fetchMock = fetch as fetch.FetchMock;

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('Populates data for Users correctly', () => {
        fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
        const provider = new Provider();
        const onResponse = jest.fn();
        const onError = jest.fn();
      
        return provider.fetchUsers()
          .then(onResponse)
          .catch(onError)
          .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
            expect(provider.users[0].id).toEqual(1);
            expect(provider.users[0].username).toEqual("Bret");
            expect(provider.users[0].email).toEqual("Sincere@april.biz");
          });
      });

      it('Populates data for Todos correctly', () => {
        fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
        const provider = new Provider();
        const onResponse = jest.fn();
        const onError = jest.fn();
      
        return provider.fetchTodos()
          .then(onResponse)
          .catch(onError)
          .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
            expect(provider.todos[0].id).toEqual(1);
            expect(provider.todos[0].title).toEqual("delectus aut autem");
            expect(provider.todos[0].completed).toBe(false);
          });
      });
})