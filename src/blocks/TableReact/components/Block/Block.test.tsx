import * as React from "react";
import * as fetch from "jest-fetch-mock";

import { shallow, configure } from 'enzyme';
import { Block } from "./Block";
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from "../../../../Provider";

configure({ adapter: new Adapter() })

describe("Block", () => {
  const fetchMock = fetch as fetch.FetchMock;
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('Table renders data correclty with provided props', () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
    const provider = new Provider();
    const onResponse = jest.fn();
    const onError = jest.fn();
    const comp = shallow(<Block />)
    return provider.fetchUsers()
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(comp.debug()).toMatchSnapshot()
      });
  });
})