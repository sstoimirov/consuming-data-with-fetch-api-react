const path = require("path");

module.exports = {
    "globals": {
        "ts-jest": {
            "tsConfig": "tsconfig-testing.json",
            diagnostics: false
        }
    },
    "rootDir": path.resolve(process.cwd()),
    "verbose": false,
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
    "transform": {
        ".(ts|tsx)": path.resolve(process.cwd(), "node_modules", "ts-jest")
    },
    "collectCoverage": false,
    "collectCoverageFrom": [
        "src/**/!(index|serviceWorker|setupTests).{ts,tsx}",
        "!**/data/**",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/*.d.ts",
        "!**/index.{ts|tsx}"
    ],
    "coverageDirectory": path.resolve(process.cwd(), "coverage"),
    "coverageThreshold": {
        "global": {
            "branches": 85,
            "functions": 85,
            "lines": 85,
            "statements": 85
        }
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
}