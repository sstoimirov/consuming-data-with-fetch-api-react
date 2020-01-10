import * as fetch from "jest-fetch-mock";
import { TableReactState } from "./TableReactState";
import { Provider } from "../../../Provider";


describe("TableReactState", () => {
    let data: TableReactState;
    const fetchMock = fetch as fetch.FetchMock;

    beforeEach(() => {
        fetchMock.resetMocks();

        data = new TableReactState(new Provider())
    });

    afterEach(()=>{
        data.deactivate()
    })

    it("TableReactState sets data correctly", async(done) => {
        fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
        const provider = new Provider();
        const onResponse = jest.fn();
        const onError = jest.fn();
        return await provider.fetchUsers()
            .then(onResponse)
            .catch(onError)
            .finally(() => {
                data.setOrder("DESC");
                expect(onResponse).toHaveBeenCalled();
                expect(onError).not.toHaveBeenCalled();
                expect(typeof TableReactState).toBe("function");
                expect(data.sortOrder).toEqual("DESC");
                done();
            });
    })

    it("TableReactState instance", () => {
        expect(data).toBeInstanceOf(TableReactState)
    })
})