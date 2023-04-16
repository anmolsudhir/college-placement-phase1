import React, {useRef, useState} from 'react'
import { 
  Radio, 
  RadioGroup, 
  FormControl, 
  FormControlLabel, 
  FormLabel 
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function InputCard({element}) {
  const [isValid, setIsValid] = useState(true)
  const [personName, setPersonName] = useState(null)
  const compRef = useRef(null);
  const handleOnClick = () => {
    if(compRef.current.focus()) compRef.current.focus();
  }

  const validate = (e) => {
    if(!e.target.value.match(element.regex)){
      setIsValid(false)
    }else{
      setIsValid(true)
    }
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const inputs = [
    {
      label : 'text',
      elem : <div style={{width:"100%"}}>
        <label className='label-inp' htmlFor={element.label}>{element.label}:</label>
        <input onClick={handleOnClick} onChange={validate} ref={compRef} type={`${element.type}`} placeholder={element.label} className='my-inp' name={element.label} id={element.label} label={element.label}/>
      </div>
    },
    {
      label : 'tel',
      elem : <div style={{width:"100%"}}>
        <label className='label-inp' htmlFor={element.label}>{element.label}:</label>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <div style={{margin:"0 0.25rem 0 0", padding:"0.4rem 0.5rem 0.25rem 0.25rem", height:"2.55rem", boxShadow:"0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1)", borderRadius:"0.5rem", fontWeight:"200"}}>
            +91
          </div>
          <input onChange={validate} ref={compRef} type={`${element.type}`} placeholder={element.label} className='my-inp' name={element.label} id={element.label} label={element.label}/>
        </div>
      </div>
    },
    {
      label : 'radio',
      elem : <div>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{element.label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {element.list?.map((ele) => <FormControlLabel value={ele} control={<Radio />} label={ele} />)}
      </RadioGroup>
    </FormControl>
      </div>
    },
    {
      label : 'date',
      elem : <div>
        <label className='label-inp' htmlFor={element.label}>{element.label}:</label>
        <input type={`${element.type}`} placeholder={element.label} className='my-inp' name={element.label} id={element.label} label={element.label}/>
      </div>
    },
    {
      label : 'pemail',
      elem : <div style={{width:"100%"}}>
        <label className='label-inp' htmlFor={element.label}>{element.label}:</label>
        <input onChange={validate} ref={compRef} type={`${element.type}`} placeholder={element.label} className='my-inp' name={element.label} id={element.label} label={element.label}/>
      </div>
    },
    {
      label : 'cemail',
      elem : <div style={{width:"100%"}}>
        <label className='label-inp' htmlFor={element.label}>{element.label}:</label>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <input onChange={validate} ref={compRef} type={`${element.type}`} placeholder={element.label} className='my-inp' name={element.label} id={element.label} label={element.label}/>
          <div style={{textAlign:"center",width:"50%", margin:"0 0.25rem 0 0", padding:"0.4rem 0.5rem 0.25rem 0.25rem", height:"2.55rem", boxShadow:"0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1)", borderRadius:"0.5rem", fontWeight:"200"}}>
            cmrit.ac.in
          </div>
        </div>
      </div>
    },
    {
      label : 'addr',
      elem : <div style={{width: "100%"}}>
        <label>{element.label}</label>
        <input placeholder={"House No."} className='my-inp' name={"House Number"} id={"house"} label={"house"}/>
        <input placeholder={"Street"} className='my-inp' name={"street"} id={"street"} label={"street"}/>
        <input placeholder={"Locality"} className='my-inp' name={"locality"} id={"locality"} label={"locality"}/>
        <input placeholder={"City"} className='my-inp' name={"city"} id={"house"} label={"city"}/>
        <input placeholder={"State"} className='my-inp' name={"state"} id={"state"} label={"state"}/>
        <input placeholder={"Pin Code"} className='my-inp' name={"pin"} id={"pin"} label={"pin"}/>
      </div>
    },
    {
      label : 'select',
      elem : <div>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{element.label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          //multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          //MenuProps={MenuProps}
        >
          {element.list?.map((name) => (
            <MenuItem
              key={name}
              value={name}
              //style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    },
    {
      label : 'res',
      elem : <div style={{width:"100%"}}>
        <label className='label-inp' htmlFor={element.label}>{element.label}:</label>
        <input type={`${element.type}`} placeholder={element.label} className='my-inp' name={element.label} id={element.label} label={element.label}/>
      </div>
    },
    {
      label : 'number',
      elem : <div style={{width:"100%"}}>
         <label className='label-inp' htmlFor={element.label}>{element.label}:</label>
        <input type={`${element.type}`} placeholder={element.label} className='my-inp' name={element.label} id={element.label} label={element.label}/>
      </div>
    },
  ]
  return (
    <div className='elem'>
        {inputs.find(elem => element.type === elem.label).elem}
        {isValid ? null : <span style={{fontSize:"0.71rem", color:"#6C0404", margin:"0px", padding:"0px"}}>Not Valid</span>}
    </div>
  )
}

export default InputCard