//mock name_component name
const locationMockData_locationdelegate = require('./Ed-portal/feature/onboarding-flow/location/LocationMock');
const courseMockData_explorecontent = require('./Ed-portal/feature/LandingPage/AllCourses/MockCourseData');
const responseMockData_explorepage = require('./Ed-portal/feature/LandingPage/Home/MockResponse');
const userRolesMockData_locationdelegate = require('./Ed-portal/feature/onboarding-flow/location/UserRolesMock')
const userTypesMockData_onboardinguser = require('./Ed-portal/feature/onboarding-flow/userType/UserTypeMock')


module.exports = {
  getMockResponseData: function (key) {
    switch (key) {
      case 'delegate-location':
        return locationMockData_locationdelegate;
      case 'delegate-role':
        return userRolesMockData_locationdelegate;
      case 'explore-page':
        return responseMockData_explorepage;
      case 'explore-content':
        return courseMockData_explorecontent;
      case 'onboarding-user':
        return userTypesMockData_onboardinguser;
      default:
        return null;
    }
  },
};