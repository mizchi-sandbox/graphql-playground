import React from "react";
import { storiesOf } from "@storybook/react";
import MockProvider from "./MockProvider";
import Index from "../index";

storiesOf("Mock GraphQL example", module).add("Mocked Index", () => (
  <MockProvider>
    <Index />
  </MockProvider>
));
