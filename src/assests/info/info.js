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
                          info : "Write Full Name in CAPITAL letters with spaces between first name and last name and it must be as per 10th marks card"
                        },
                        {
                          label : "USN",
                          type : "text",
                          regex : /^(1CR)(1[0-9]|2[0-3])[A-Z]{2}[A-Z]?[0-9]{3}\s*$/,
                          validable : true,
                          info : "Write Full USN in CAPITAL letters. (Ex 1CR19CS001)"
                        },
                        {
                          label : "Mobile Number",
                          type : "tel",
                          regex : /^[6-9][0-9]{9}\s*$/,
                          validable : true,
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Whatsapp Number",
                          type : "tel",
                          regex : /^[6-9][0-9]{9}\s*$/,
                          validable : true,
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
                          validable : true,
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
                          info : "Enter your college e-mail ID. It must be of form branch.usn.name@gmail.com"
                        },
                        {
                          label : "College Mail",
                          type : "mail",
                          regex : /^[a-z]{4,6}[0-9]{2}[a-z]{2}\s*$/,
                          validable : true,
                          info : "Enter your personal e-mail ID. (Ex ansu20cs@cmrit.ac.in)"
                        },
                        {
                          label : "Parent's Phone",
                          type : "tel",
                          regex : /^[6-9][0-9]{9}\s*$/,
                          validable : true,
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Mentors Name",
                          type : "text",
                          regex : /^[A-Za-z]+[A-Za-z\s]*$/,
                          validable : true,
                          info : "Write Full Name of you mentor letters with spaces between first name and last name and it must be as per 10th marks card"
                        },
                        {
                          label : "Mentors's Phone",
                          type : "tel",
                          regex : /^[6-9][0-9]{9}\s*$/,
                          validable : true,
                          info : "Do not enter +91, the mobile number must be 10 digits, check again after typing"
                        },
                        {
                          label : "Communication Address",
                          type : "addr",
                          validable : true,
                          regex : /.+/,
                          info : "Enter your current address for communication"
                        },
                        {
                          label : "Permanent Address",
                          type : "addr",
                          validable : true,
                          regex : /.+/,
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
                          type : "radio",
                          list : ['Regular','Lateral'],
                          info : "Select your type of entry"
                        },
                        {
                          label : "10th Result",
                          type : "res",
                          validable : true,
                          regex : /.+/,
                          info : "Enter 10th result (Enter CGPA or Percentage as mentioned in your 10th markscard)"
                        },
                        {
                          label : "12th / PUC Result",
                          type : "res",
                          validable : true,
                          regex : /.+/,
                          info : "Enter 12th result (Enter CGPA or Percentage as mentioned in your 12th markscard)"
                        },
                        {
                          label : "Pursuing Degree Result",
                          type : "res",
                          validable : true,
                          regex : /.+/,
                          info : "Enter pursuing degree result (Enter CGPA or Percentage)"
                        },
                        {
                          label : "PG Specialization",
                          hidden : true,
                          type : "select",
                          list : ['None','Management/HR', 'Management/Finance', 'Finance/HR'],
                          info : 'Select your PG Specialization',
                        },
                        {
                          label : "UG Degree",
                          hidden : true,
                          type : "select",
                          list : ['BCA','BCom', 'BE', 'BBA'],
                          info : 'Select your UG Degree',
                        },
                        {
                          label : "UG Specialization",
                          hidden : true,
                          type : "select",
                          list : ['Computer Science','Computer Application', 'BE', 'BBA', 'Other'],
                          info : 'Select your UG Specialization',
                        },
                        {
                          label : "UG Result",
                          hidden : true,
                          type : "res",
                          validable : true,
                          regex : /.+/,
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
                          info : "Enter the number of your current backlog"
                        },
                        {
                          label : "Backlog history",
                          type : "number",
                          validable : true,
                          regex : /^[0-9]+$/,
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