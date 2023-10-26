//mock name_component name
const locationMockData = require('./Ed-portal/feature/onboarding-flow/location/LocationMock');
const courseMockData_explorecontent = require('./Ed-portal/feature/LandingPage/AllCourses/MockCourseData');
const responseMockData_explorepage = require('./Ed-portal/feature/LandingPage/Home/MockResponse');
const userRolesMockData = require('./Ed-portal/feature/onboarding-flow/userType/UserRolesMock')

module.exports = {
  // key refers to the component name to be called
  getMockResponseData: (key) => {
    if (key === 'explore-page') {
      return responseMockData_explorepage;
    }
    else if(key === 'explore-content'){
      return courseMockData_explorecontent;
    }
  },
};


