import * as React from "react";
import { shallow, configure } from "enzyme";
import { Btn } from "./Btn";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Btn", () => {
    it("Renders correctly", () => {
        const comp = shallow(<Btn text="Button" onClick={jest.fn()} />);
        expect(comp.debug()).toMatchSnapshot();
    })
})