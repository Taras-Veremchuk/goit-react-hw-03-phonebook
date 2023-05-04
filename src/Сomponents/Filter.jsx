import React from "react";
import PropTypes from 'prop-types';
import{Input, Label} from "./PhoneBook.styled"


const Filter = ({filter, onFilterChange}) => {
  return( <Label htmlFor="">Find contact by name
      <Input defaultValue={filter} type="text" onChange={onFilterChange}/>
        </Label>)
}
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}
