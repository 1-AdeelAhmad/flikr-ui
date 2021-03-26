import { shallow } from "enzyme";
import * as React from "react";
import AppBar from "./AppBar";

describe("AppBar", () => {
   it("Should render AppBar", () => {
      const component = shallow(<AppBar />);

      expect(component).toHaveLength(1);
   });
});
