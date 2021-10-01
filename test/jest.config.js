// To have consistent date time parsing both in local and CI environments we set
// the timezone of the Node process.
process.env.TZ = "GMT";

module.exports = {
  displayName: "POC-Development",
  rootDir: "../",
  setupFilesAfterEnv: ["<rootDir>/node_modules/jest-enzyme/lib/index.js"],
  testPathIgnorePatterns: ["node_modules"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/client/actionTypes",
    "<rootDir>/src/client/index.js",
    "<rootDir>/src/client/reducers/index.js",
    "<rootDir>/src/client/routes.jsx",
    "<rootDir>/src/client/sagas",
    "<rootDir>/src/client/server.js",
    "<rootDir>/src/client/store.js",
    "<rootDir>/src/client/mock"
  ],
  bail: true,
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/client/**/*.test.{js,jsx}",
    "<rootDir>/steps/**/*.steps.js"
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  // note: this config have to have in sync with moduleNameMapper in jest.config.server.js
  moduleNameMapper: {
    "\\.(css|scss)$": "jest-transform-css",
    "^.+\\.(gif|ttf|eot|svg|woff|woff2|ico|png|jpg)$": "<rootDir>/test/file.stub.js"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["<rootDir>/test/jest.setup.js"],
  collectCoverageFrom: [
    "<rootDir>/src/client/**/*.{js,jsx}"
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 80,
      functions: 90,
      lines: 90
    }
  }
};
