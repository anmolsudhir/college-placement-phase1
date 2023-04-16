const info = [
                  [
                    { 
                      header : "Personal Info",
                      content: 
                      [
                        {
                          label : "USN",
                          type : "text",
                          regex : /\d[A-Z]{2}[0-9]{2}[A-Z]{2}[A-Z]?[0-9]{3}/
                        },
                        {
                          label : "Mobile Number",
                          type : "tel",
                          regex : /[0-9]{10}/
                        },
                        {
                          label : "Whatsapp Number",
                          type : "tel",
                          regex : /[0-9]{10}/
                        },
                        {
                          label : "Gender",
                          type : "radio",
                          list : ["Male", "Female", "Other"]
                        },
                        {
                          label : "Date of Birth",
                          type : "date"
                        }
                      ]
                    }
                  ], 
                  [
                    { 
                      header : "Additional Info",
                      content: 
                      [
                        {
                          label : "Personal Mail",
                          type : "pemail",
                          regex : /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
                        },
                        {
                          label : "College Mail",
                          type : "cemail",
                          regex : /[a-z]{4}[0-9]{2}[a-z]{2}/
                        },
                        {
                          label : "Parents Phone",
                          type : "tel",
                          regex : /[0-9]{10}/
                        },
                        {
                          label : "Communication Address",
                          type : "addr"
                        },
                        {
                          label : "Permanent Address",
                          type : "addr"
                        }
                      ]
                    }
                  ], 
                  [
                    { 
                      header : "Academic Info",
                      content: 
                      [
                        {
                          label : "Pursuing Degree",
                          type : "select",
                          list : ['BTech','MBA', 'MTech']
                        },
                        {
                          label : "Department",
                          type : "select",
                          list : ['CSE','ISE', "AI"]
                        },
                        {
                          label : "Year of Joining",
                          type : "select",
                          list : ['2020','2021', '2022', '2023']
                        },
                        {
                          label : "Type of Entry",
                          type : "select",
                          list : ['Regular','Lateral']
                        },
                        {
                          label : "10th Result",
                          type : "res"
                        },
                        {
                          label : "12th Result",
                          type : "res"
                        },
                        // {
                        //   label : "PG Specialization",
                        //   type : "alnum"
                        // },
                        // {
                        //   label : "UG Degree",
                        //   type : "alnum"
                        // },
                        // {
                        //   label : "UG Specialization",
                        //   type : "alnum"
                        // },
                        // {
                        //   label : "UG Result",
                        //   type : "alnum"
                        // },
                        // {
                        //   label : "Pursuing Degree Resull",
                        //   type : "alnum"
                        // },
                      ]
                    }
                  ], 
                  [
                    { 
                      header : "Career Choice",
                      content: 
                      [
                        {
                          label : "Career choice",
                          type : "text"
                        },
                        {
                          label : "Are you Interested in CMRIT Placement",
                          type : "radio",
                          list : ["Yes", "No"]
                        },
                        {
                          label : "Type of job interested in",
                          type : "text"
                        }
                      ]
                    },
                    ],
                    [
                        { 
                      header : "Backlog history",
                      content: 
                      [
                        {
                          label : "Current Backlog",
                          type : "number"
                        },
                        {
                          label : "Backlog history",
                          type : "number"
                        },
                        {
                          label : "Year Back",
                          type : "radio",
                          list : ["Yes", "No"]
                        },
                        {
                          label : "Gap in Career",
                          type : "radio",
                          list : ["Yes", "No"]
                        },
                        {
                          label : "Gap at CMRIT",
                          type : "radio",
                          list : ["Yes", "No"]
                        }
                      ]
                    }
                  ]
            ]
export default info;