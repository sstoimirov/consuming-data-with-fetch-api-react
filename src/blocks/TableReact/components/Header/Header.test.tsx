import * as React from "react";
import { shallow,configure } from "enzyme";
import { Header } from "./Header";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Footer",()=>{
    it("Renders correctly", ()=>{
        const comp = shallow(<Header />);
        expect(comp).toMatchSnapshot();
    })
})