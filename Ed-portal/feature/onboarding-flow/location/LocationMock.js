const locationMock = [
    {
        "code": "name",
        "type": "input",
        "templateOptions": {
            "labelHtml": {
                "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                "values": {
                    "$0": "Name"
                }
            },
            "hidden": true,
            "placeHolder": "Enter Name",
            "multiple": false
        },
        "validations": [
            {
                "type": "required"
            }
        ]
    },
    {
        "code": "persona",
        "type": "nested_select",
        "templateOptions": {
            "hidden": true,
            "labelHtml": {
                "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                "values": {
                    "$0": "Role"
                }
            },
            "placeHolder": "Select Role",
            "multiple": false,
            "themeType": "material",
            "dataSrc": {
                "marker": "SUPPORTED_PERSONA_LIST"
            }
        },
        "validations": [
            {
                "type": "required"
            }
        ],
        "children": {
            "administrator": [
                {
                    "code": "state",
                    "type": "select",
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "State"
                            }
                        },
                        "placeHolder": "Select State",
                        "multiple": false,
                        "dataSrc": {
                            "marker": "STATE_LOCATION_LIST",
                            "params": {
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "district",
                    "type": "select",
                    "context": "state",
                    "default": null,
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "District"
                            }
                        },
                        "placeHolder": "Select District",
                        "multiple": false,
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "district",
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "block",
                    "type": "select",
                    "context": "district",
                    "default": null,
                    "templateOptions": {
                        "label": "Block",
                        "placeHolder": "Select Block",
                        "multiple": false,
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "block",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    },
                    "validations": []
                },
                {
                    "code": "cluster",
                    "type": "select",
                    "context": "block",
                    "default": null,
                    "templateOptions": {
                        "label": "Cluster",
                        "placeHolder": "Select Cluster",
                        "multiple": false,
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "cluster",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                },
                {
                    "code": "school",
                    "type": "select",
                    "context": "cluster",
                    "default": null,
                    "templateOptions": {
                        "label": "School",
                        "placeHolder": "Select School",
                        "multiple": false,
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "school",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                }
            ],
            "teacher": [
                {
                    "code": "state",
                    "type": "select",
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "State"
                            }
                        },
                        "placeHolder": "Select State",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "STATE_LOCATION_LIST",
                            "params": {
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "district",
                    "type": "select",
                    "context": "state",
                    "default": null,
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "District"
                            }
                        },
                        "placeHolder": "Select District",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "district",
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "block",
                    "type": "select",
                    "context": "district",
                    "default": null,
                    "templateOptions": {
                        "label": "Block",
                        "placeHolder": "Select Block",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "block",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    },
                    "validations": []
                },
                {
                    "code": "cluster",
                    "type": "select",
                    "context": "block",
                    "default": null,
                    "templateOptions": {
                        "label": "Cluster",
                        "placeHolder": "Select Cluster",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "cluster",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                },
                {
                    "code": "school",
                    "type": "select",
                    "context": "cluster",
                    "default": null,
                    "templateOptions": {
                        "label": "School",
                        "placeHolder": "Select School",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "school",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                }
            ],
            "student": [
                {
                    "code": "state",
                    "type": "select",
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "State"
                            }
                        },
                        "placeHolder": "Select State",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "STATE_LOCATION_LIST",
                            "params": {
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "district",
                    "type": "select",
                    "context": "state",
                    "default": null,
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "District"
                            }
                        },
                        "placeHolder": "Select District",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "district",
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "block",
                    "type": "select",
                    "context": "district",
                    "default": null,
                    "templateOptions": {
                        "label": "Block",
                        "placeHolder": "Select Block",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "block",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    },
                    "validations": []
                },
                {
                    "code": "cluster",
                    "type": "select",
                    "context": "block",
                    "default": null,
                    "templateOptions": {
                        "label": "Cluster",
                        "placeHolder": "Select Cluster",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "cluster",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                },
                {
                    "code": "school",
                    "type": "select",
                    "context": "cluster",
                    "default": null,
                    "templateOptions": {
                        "label": "School",
                        "placeHolder": "Select School",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "school",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                }
            ],
            "farmer": [
                {
                    "code": "state",
                    "type": "select",
                    "templateOptions": {
                        "labelHtml": {
                           "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                           "values": {
                               "$0": "State"
                           }
                        },
                        "placeHolder": "Select State",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "STATE_LOCATION_LIST",
                            "params": {
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "district",
                    "type": "select",
                    "context": "state",
                    "default": null,
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "District"
                            }
                        },
                        "placeHolder": "Select District",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "district",
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "block",
                    "type": "select",
                    "context": "district",
                    "default": null,
                    "templateOptions": {
                        "label": "Block",
                        "placeHolder": "Select Block",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "block",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    },
                    "validations": []
                },
                {
                    "code": "cluster",
                    "type": "select",
                    "context": "block",
                    "default": null,
                    "templateOptions": {
                        "label": "Cluster",
                        "placeHolder": "Select Cluster",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "cluster",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                },
                {
                    "code": "school",
                    "type": "select",
                    "context": "cluster",
                    "default": null,
                    "templateOptions": {
                        "label": "School",
                        "placeHolder": "Select School",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "school",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                }
            ],

            "other": [
              {
                  "code": "state",
                  "type": "select",
                  "templateOptions": {
                      "placeHolder": "Select State",
                      "multiple": false,
                      "themeType": "material",
                      "dataSrc": {
                          "marker": "STATE_LOCATION_LIST",
                          "params": {
                              "useCase": "SIGNEDIN_GUEST"
                          }
                      }
                  },
                  "validations": [
                      {
                          "type": "required"
                      }
                  ]
              },
              {
                  "code": "district",
                  "type": "select",
                  "context": "state",
                  "default": null,
                  "templateOptions": {
                      "labelHtml": {
                          "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                          "values": {
                              "$0": "District"
                          }
                      },
                      "placeHolder": "Select District",
                      "multiple": false,
                      "themeType": "material",
                      "dataSrc": {
                          "marker": "LOCATION_LIST",
                          "params": {
                              "id": "district",
                              "useCase": "SIGNEDIN_GUEST"
                          }
                      }
                  },
                  "validations": [
                      {
                          "type": "required"
                      }
                  ]
              },
              {
                  "code": "block",
                  "type": "select",
                  "context": "district",
                  "default": null,
                  "templateOptions": {
                      "label": "Block",
                      "placeHolder": "Select Block",
                      "multiple": false,
                      "themeType": "material",
                      "dataSrc": {
                          "marker": "LOCATION_LIST",
                          "params": {
                              "id": "block",
                              "useCase": "SIGNEDIN"
                          }
                      }
                  },
                  "validations": []
              },
              {
                  "code": "cluster",
                  "type": "select",
                  "context": "block",
                  "default": null,
                  "templateOptions": {
                      "label": "Cluster",
                      "placeHolder": "Select Cluster",
                      "multiple": false,
                      "themeType": "material",
                      "dataSrc": {
                          "marker": "LOCATION_LIST",
                          "params": {
                              "id": "cluster",
                              "useCase": "SIGNEDIN"
                          }
                      }
                  }
              },
              {
                  "code": "school",
                  "type": "select",
                  "context": "cluster",
                  "default": null,
                  "templateOptions": {
                      "label": "School",
                      "placeHolder": "Select School",
                      "multiple": false,
                      "themeType": "material",
                      "dataSrc": {
                          "marker": "LOCATION_LIST",
                          "params": {
                              "id": "school",
                              "useCase": "SIGNEDIN"
                          }
                      }
                  }
              }
          ],
            "parent": [
                {
                    "code": "state",
                    "type": "select",
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "State"
                            }
                        },
                        "placeHolder": "Select State",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "STATE_LOCATION_LIST",
                            "params": {
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "district",
                    "type": "select",
                    "context": "state",
                    "default": null,
                    "templateOptions": {
                        "labelHtml": {
                            "contents": "<span>$0&nbsp;<span class=\"required-asterisk\">*</span></span>",
                            "values": {
                                "$0": "District"
                            }
                        },
                        "placeHolder": "Select District",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "district",
                                "useCase": "SIGNEDIN_GUEST"
                            }
                        }
                    },
                    "validations": [
                        {
                            "type": "required"
                        }
                    ]
                },
                {
                    "code": "block",
                    "type": "select",
                    "context": "district",
                    "default": null,
                    "templateOptions": {
                        "label": "Block",
                        "placeHolder": "Select Block",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "block",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    },
                    "validations": []
                },
                {
                    "code": "cluster",
                    "type": "select",
                    "context": "block",
                    "default": null,
                    "templateOptions": {
                        "label": "Cluster",
                        "placeHolder": "Select Cluster",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "cluster",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                },
                {
                    "code": "school",
                    "type": "select",
                    "context": "cluster",
                    "default": null,
                    "templateOptions": {
                        "label": "School",
                        "placeHolder": "Select School",
                        "multiple": false,
                        "themeType": "material",
                        "dataSrc": {
                            "marker": "LOCATION_LIST",
                            "params": {
                                "id": "school",
                                "useCase": "SIGNEDIN"
                            }
                        }
                    }
                }
            ]
        }
    }
]

module.exports = locationMock;