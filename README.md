# sb-fake-json

A library for mocking data in Sunbird Ed-Portal as Fallback

## Installation

You can install this library using npm or yarn:

```sh
npm install sb-fake-json@latest
```

or

```sh
yarn add sb-fake-json@latest
```

## Usage

In your JavaScript or TypeScript code, you can use this library to access mock data for various purposes. Import it as follows:

```javascript
import * as MockData from 'sb-fake-json';

const locationMockData = MockData.getLocationMockData()
const courseMockData = MockData.getCourseMockData();
const responseMockData = MockData.getResponseMockData();
const userRolesMockData = MockData.getUserRolesMockData();
```

## To import single mock data

```javascript

import { getLocationMockData } from 'sb-fake-json';

const locationMockData = getLocationMockData()

```

## Mock Data

- `getLocationMockData()`: Retrieve mock data for locations.
- `getCourseMockData()`: Retrieve mock data for courses.
- `getResponseMockData()`: Retrieve mock response data.
- `getUserRolesMockData()`: Retrieve mock data for User roles.

## Test Mock Data

Add the mock location of data and run `node testMockData.js`

## Author

Tushar
Mithun Lokanathan

## Contact

If you have any questions or suggestions, feel free to contact me at
mithun@sedintechnologies.com, tushar@sedintechnologies.com.
