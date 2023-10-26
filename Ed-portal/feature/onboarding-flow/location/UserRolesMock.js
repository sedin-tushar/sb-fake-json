const roleMock = [
    {
        "code": "teacher",
        "name": "Teacher",
        "label": "frmelmnts.lbl.teacher",
        "visibility": true,
        "image": "guest-img1.svg",
        "index": 0,
        "searchFilter": [
            "Teacher",
            "Instructor"
        ]
    },
    {
        "code": "student",
        "name": "Student",
        "visibility": true,
        "label": "frmelmnts.lbl.student",
        "image": "guest-img2.svg",
        "index": 1,
        "searchFilter": [
            "Student",
            "Learner"
        ]
    },
    
    {
        "code": "parent",
        "name": "Parent",
        "index": 2,
        "visibility": true,
        "label": "frmelmnts.lbl.parent",
        "image": "guest-img4.svg",
        "searchFilter": [
            "Student",
            "Teacher",
            "Instructor",
            "Learner"
        ]
    },
    {
      "code": "farmer",
      "name": "Farmer",
      "visibility": true,
      "label": "Farmer",
      "image": "guest-img2.svg",
      "index": 3,
      "searchFilter": [
          "Student",
          "Learner"
      ]
  },
    {
        "code": "other",
        "name": "Other",
        "visibility": false,
        "index": 4,
        "label": "frmelmnts.lbl.other",
        "image": "guest-img3.svg",
        "searchFilter": [
            "Student",
            "Teacher",
            "Instructor",
            "Learner"
        ]
    }
]
module.exports = roleMock;