// export default {
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.(js|jsx)$": "babel-jest",
//   },
//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//   },
//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
// };
// jest.config.js
// module.exports = {
//   testEnvironment: "jest-environment-jsdom",
//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//     "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
//   },
//   transform: {
//     "^.+\\.(js|jsx)$": "babel-jest",
//   },
//   testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
// };
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/main.jsx",
    "!src/vite-env.d.ts",
    "!**/node_modules/**",
  ],
};
