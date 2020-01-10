import * as React from "react";
import { shallow, configure } from "enzyme";
import { Search } from "./Search";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Search", () => {
    it("Renders correctly", () => {
        const comp = shallow(<Search text="Place you text here" onChange={x => x} />);
        expect(comp.debug()).toMatchSnapshot();
    })
})