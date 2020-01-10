import * as React from "react";
import { shallow, configure } from "enzyme";
import { SelectDropdown } from "./SelectDropdown";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("SelectDropdown", () => {
    it("Renders correctly", () => {
        const props = {
            onChange: jest.fn(),
            name: "name",
            userName: "username",
            email: "email"
        }
        
        const comp = shallow(<SelectDropdown {...props} />);
        expect(comp.debug()).toMatchSnapshot();
    })
})