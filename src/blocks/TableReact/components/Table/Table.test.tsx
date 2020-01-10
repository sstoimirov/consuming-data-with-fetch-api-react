import * as React from "react";
import * as fetch from "jest-fetch-mock";

import { shallow, configure } from 'enzyme';
import { Table } from "./Table";
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from "../../../../Provider";
import { TableReactState } from "../../state";
import { Btn } from "../Btn";
configure({ adapter: new Adapter() })
describe("Table", () => {
  const fetchMock = fetch as fetch.FetchMock;
  let state: TableReactState, provider, onResponse, onError, comp, btn

  beforeEach(() => {
    fetchMock.resetMocks();
    state = new TableReactState(new Provider());
    provider = new Provider();
    onResponse = jest.fn();
    onError = jest.fn();
    comp = shallow(<Table dataProvider={state} />)
    btn = comp.find(Btn).at(0);
  });

  it('Table renders data correclty with provided props for Users and sort DESC', async (done) => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
    return await provider.fetchUsers()
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        state.sortOrder = "DESC";
        btn.simulate("click");

        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(state.sortOrder).toEqual("ASC")
        expect(comp.debug()).toMatchSnapshot()
        done()
      });
  });

  it('Table renders data correclty with provided props for Users and sort ASC', async (done) => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
    return await provider.fetchUsers()
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        state.sortOrder = "ASC";
        btn.simulate("click");

        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(state.sortOrder).toEqual("DESC");
        expect(comp.debug()).toMatchSnapshot();
        done();
      });
  });

  it('Table renders data correclty with provided props for Todos', async (done) => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
    const provider = new Provider();
    const onResponse = jest.fn();
    const onError = jest.fn();
    const comp = shallow(<Table dataProvider={state} />)
    return await provider.fetchTodos()
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(comp.debug()).toMatchSnapshot();
        done();
      });
  });
})