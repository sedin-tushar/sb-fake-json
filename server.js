const locationMockData = require('./Ed-portal/feature/onboarding-flow/location/LocationMock');
const courseMockData = require('./Ed-portal/feature/LandingPage/AllCourses/MockCourseData');
const responseMockData = require('./Ed-portal/feature/LandingPage/Home/MockResponse');
const userRolesMockData = require('./Ed-portal/feature/onboarding-flow/location/UserRolesMock')
const userTypesMockData = require('./Ed-portal/feature/onboarding-flow/userType/UserTypeMock')

module.exports = {
  getLocationMockData: () => locationMockData,
  getCourseMockData: () => courseMockData,
  getResponseMockData: () => responseMockData,
  getUserRolesMockData: () => userRolesMockData,
  getUserTypesMockData: () => userTypesMockData,
};
