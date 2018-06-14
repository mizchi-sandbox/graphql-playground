import { configure } from "@storybook/react";

const req = require.context("../pages/__tests__", true, /stories\.js$/);
const loadStories = req.keys().forEach(req);

configure(loadStories, module);
