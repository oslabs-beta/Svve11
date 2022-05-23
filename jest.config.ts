export default {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "svelte"
  ],
  verbose: true,
  moduleNameMapper: {
    "^\\$lib/(.*)": "./src/lib/$1",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};
