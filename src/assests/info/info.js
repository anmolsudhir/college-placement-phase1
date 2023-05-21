const info = [
                  [
                    { 
                      header : "Personal Info",
                      content: 
                      [
                        {
                          label : "Name",
                          type : "text",
                          regex : /^[A-Z]+[A-Z\s]*$/,
                          validable : true,
                          objName : "name",
                          info : "Write Full Name in CAPITAL letters with spaces between first name and last name and it must be as per 10th marks card"
                        },
                        {
                          label : "USN",
                          type : "text",
                          regex : /^(1CR)(1[0-9]|2[0-3])[A-Z]{2}[A-Z]?[0-9]{3}\s*$/,
                          validable : true,
                          objName : "usn",
                          info : "Write Full USN in CAPITAL letters. (Ex 1CR19CS001)"
                        },
                        {
                          label : "Whatsapp Number",
                          type : "tel",
                          regex : /^[6-9][0-9]{9}\s*$/,
                          validable : true,
                          objName : "whatsapp",
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Gender",
                          type : "radio",
                          list : ["Male", "Female", "Other"],
                          objName : "gender",
                          info : "Select your gender"
                        },
                        {
                          label : "Date of Birth",
                          type : "date",
                          validable : true,
                          objName : "dob",
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
                          type : "mail",
                          regex : /^[a-z]{2,3}\.(1cr)(1[0-9]|2[0-3])[a-z]{2}[0-9]{3}\.[a-z]+(\.[a-z]+)*\s*$/,
                          validable : true,
                          objName : "pmail",
                          info : "Enter your personal e-mail ID. It must be of form branch.usn.name@gmail.com"
                        },
                        {
                          label : "Parent's Phone",
                          type : "tel",
                          regex : /^[6-9][0-9]{9}\s*$/,
                          validable : true,
                          objName : "parent-phone",
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Mentors Name",
                          type : "text",
                          regex : /^[A-Za-z]+[A-Za-z\s]*$/,
                          validable : true,
                          objName : "mentor-name",
                          info : "Write Full Name of you mentor letters with spaces between first name and last name and it must be as per 10th marks card"
                        },
                        {
                          label : "Mentors's Phone",
                          type : "tel",
                          regex : /^[6-9][0-9]{9}\s*$/,
                          validable : true,
                          objName : "mentor-phone",
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Communication Address",
                          type : "addr",
                          validable : true,
                          regex : /.+/,
                          objName : "com-address",
                          info : "Enter your current address for communication"
                        },
                        {
                          label : "Permanent Address",
                          type : "addr",
                          validable : true,
                          regex : /.+/,
                          objName : "per-address",
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
                          list : ['BE','MBA', 'MTech', 'MCA'],
                          objName : "pursuing-degree",
                          info : "Select your current degree from the dropdown below"
                        },
                        {
                          label : "Department",
                          type : "select",
                          list : ['CSE','ISE', "AI"],
                          objName : "dept",
                          info : "Select your branch from the dropdown below"
                        },
                        {
                          label : "Year of Joining",
                          type : "select",
                          list : ['2020','2021', '2022', '2023'],
                          objName : "year-joining",
                          info : "Enter the year when you joined CMRIT"
                        },
                        {
                          label : "Type of Entry",
                          type : "radio",
                          list : ['Regular','Lateral'],
                          objName : "entry-type",
                          info : "Select your type of entry"
                        },
                        {
                          label : "10th Result",
                          type : "res",
                          validable : true,
                          regex : /.+/,
                          objName : "res-10",
                          info : "Enter 10th result (Enter CGPA or Percentage as mentioned in your 10th markscard)"
                        },
                        {
                          label : "12th / PUC Result",
                          type : "res",
                          validable : true,
                          regex : /.+/,
                          objName : "res-12",
                          info : "Enter 12th result (Enter CGPA or Percentage as mentioned in your 12th markscard)"
                        },
                        {
                          label : "Pursuing Degree Result",
                          type : "res",
                          validable : true,
                          regex : /.+/,
                          objName : "res-ug-pursuing",
                          info : "Enter pursuing degree result (Enter CGPA or Percentage)"
                        },
                        {
                          label : "PG Specialization",
                          hidden : true,
                          type : "select",
                          list : ['None','Management/HR', 'Management/Finance', 'Finance/HR'],
                          objName : "pg-special",
                          info : 'Select your PG Specialization',
                        },
                        {
                          label : "UG Degree",
                          hidden : true,
                          type : "select",
                          list : ['BCA','BCom', 'BE', 'BBA'],
                          objName : "ug-deg",
                          info : 'Select your UG Degree',
                        },
                        {
                          label : "UG Specialization",
                          hidden : true,
                          type : "select",
                          objName : "ug-special",
                          list : ['Computer Science','Computer Application', 'BE', 'BBA', 'Other'],
                          info : 'Select your UG Specialization',
                        },
                        {
                          label : "UG Result",
                          hidden : true,
                          type : "res",
                          validable : true,
                          regex : /.+/,
                          objName : "res-ug",
                          info : "Enter 10th result (Enter CGPA or Percentage as mentioned in your 10th markscard)"
                        },
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
                          objName : "placement-interest",
                          info : "Select yes or no"
                        },
                        // {
                        //   label : "Career choice",
                        //   type : "select",
                        //   list : ["IT", "Core"],
                        //   info : "Select Career of your choice"
                        // },
                        {
                          label : "Type of job interested in",
                          type : "select",
                          list : ["IT", "Core"],
                          hidden : true,
                          objName : "job-type",
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
                          validable : true,
                          regex : /^[0-9]+$/,
                          objName : "backlog-curr",
                          info : "Enter the number of your current backlog"
                        },
                        {
                          label : "Backlog history",
                          type : "number",
                          validable : true,
                          regex : /^[0-9]+$/,
                          objName : "backlog-hist",
                          info : "Enter the history of your backlogs"
                        },
                        {
                          label : "Year Back",
                          type : "radio",
                          list : ["Yes", "No"],
                          objName : "back-year",
                          info : "Select yes if you have year back"
                        },
                        {
                          label : "Gap in Career",
                          type : "radio",
                          list : ["Yes", "No"],
                          objName : "gap-career",
                          info : "Select yes if you have Gap in career"
                        },
                        {
                          label : "Gap at CMRIT",
                          type : "radio",
                          list : ["Yes", "No"],
                          objName : "gap-cmrit",
                          info : "Select yes if you have Gap at CMRIT"
                        }
                      ]
                    }
                  ]
            ]

export default info;