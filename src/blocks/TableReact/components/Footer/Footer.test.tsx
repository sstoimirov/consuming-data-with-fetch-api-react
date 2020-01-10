import * as React from "react";
import { shallow,configure } from "enzyme";
import { Footer } from "./Footer";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Footer",()=>{
    it("Renders correctly", ()=>{
        const comp = shallow(<Footer/>);
        expect(comp.debug()).toMatchSnapshot();
    })
})