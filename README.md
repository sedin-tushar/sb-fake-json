# sb-fake-json

A library for mocking data in Sunbird Ed-Portal as Fallback

## Installation

You can install this library using npm or yarn:

```sh
npm install sb-fake-json
```

or

```sh
yarn add sb-fake-json
```

## Usage

In your JavaScript or TypeScript code, you can use this library to access mock data for various purposes. Import it as follows:

```javascript
import * as MockData from 'sb-fake-json';

const response = MockData.getMockResponseData('component_name');

```

## To import single mock data

```javascript

import { getLocationMockData } from 'sb-fake-json';

const response = getMockResponseData('component_name')

```

## Mock Data

- `getMockResponseData('explore-page')`: Retrieve mock response mock for explore page component.

## Test Mock Data

Add the mock location of data and run `node testMockData.js`

## Author

Tushar
Mithun Lokanathan

## Contact

If you have any questions or suggestions, feel free to contact me at
mithun@sedintechnologies.com, tushar@sedintechnologies.com.
