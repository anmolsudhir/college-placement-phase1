const info = [
                  [
                    { 
                      header : "Personal Info",
                      content: 
                      [
                        {
                          label : "Name",
                          type : "text",
                          regex : /[^a-z]/,
                          info : "Write Full Name in CAPITAL letters with spaces between first name and last name and it must be as per 10th marks card"
                        },
                        {
                          label : "USN",
                          type : "text",
                          regex : /\d[A-Z]{2}[0-9]{2}[A-Z]{2}[A-Z]?[0-9]{3}/,
                          info : "Write Full USN in CAPITAL letters. (Ex 1CR19CS001)"
                        },
                        {
                          label : "Mobile Number",
                          type : "tel",
                          regex : /[0-9]{10}/,
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Whatsapp Number",
                          type : "tel",
                          regex : /[0-9]{10}/,
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Gender",
                          type : "radio",
                          list : ["Male", "Female", "Other"],
                          info : "Select your gender"
                        },
                        {
                          label : "Date of Birth",
                          type : "date",
                          info : "Enter Date of Birth"
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
                          regex : /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                          info : "Enter your college e-mail ID. It must be of form branch.usn.name@gmail.com"
                        },
                        {
                          label : "College Mail",
                          type : "cemail",
                          regex : /[a-z]{4}[0-9]{2}[a-z]{2}/,
                          info : "Enter your personal e-mail ID. (Ex ansu20cs@cmrit.ac.in)"
                        },
                        {
                          label : "Parents Phone",
                          type : "tel",
                          regex : /[0-9]{10}/,
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Communication Address",
                          type : "addr",
                          info : "Enter your current address for communication"
                        },
                        {
                          label : "Permanent Address",
                          type : "addr",
                          info : "Enter your permanent home address for communication"
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
                          list : ['BTech','MBA', 'MTech'],
                          info : "Select your current degree from the dropdown below"
                        },
                        {
                          label : "Department",
                          type : "select",
                          list : ['CSE','ISE', "AI"],
                          info : "Select your branch from the dropdown below"
                        },
                        {
                          label : "Year of Joining",
                          type : "select",
                          list : ['2020','2021', '2022', '2023'],
                          info : "Enter the year when you joined CMRIT"
                        },
                        {
                          label : "Type of Entry",
                          type : "select",
                          list : ['Regular','Lateral'],
                          info : "Select your type of entry"
                        },
                        {
                          label : "10th Result",
                          type : "res",
                          info : "Enter 10th result (Enter CGPA or Percentage as mentioned in your 10th markscard)"
                        },
                        {
                          label : "12th Result",
                          type : "res",
                          info : "Enter 10th result (Enter CGPA or Percentage as mentioned in your 10th markscard)"
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
                          label : "Are you Interested in CMRIT Placement",
                          type : "radio",
                          list : ["Yes", "No"],
                          info : "Select yes or no"
                        },
                        {
                          label : "Career choice",
                          type : "text",
                          info : "Select Career of your choice"
                        },
                        {
                          label : "Type of job interested in",
                          type : "text",
                          info : "Enter the Type of job"
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
                          type : "number",
                          info : "Enter the number of your current backlog"
                        },
                        {
                          label : "Backlog history",
                          type : "number",
                          info : "Enter the history of your backlogs"
                        },
                        {
                          label : "Year Back",
                          type : "radio",
                          list : ["Yes", "No"],
                          info : "Select yes if you have year back"
                        },
                        {
                          label : "Gap in Career",
                          type : "radio",
                          list : ["Yes", "No"],
                          info : "Select yes if you have Gap in career"
                        },
                        {
                          label : "Gap at CMRIT",
                          type : "radio",
                          list : ["Yes", "No"],
                          info : "Select yes if you have Gap at CMRIT"
                        }
                      ]
                    }
                  ]
            ]
export default info;