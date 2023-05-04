import React from "react";
import PropTypes from 'prop-types';
import {ContList, ContItem, ListBtn } from "./PhoneBook.styled"



const ContactList = ({ visibleContacts, deleteContact }) => {

  return(
        <ContList>{visibleContacts.map(({id, name, number}) =>
          <ContItem key={id} >{name}: {number} <ListBtn onClick={()=>deleteContact(id)} id={id} type="button">delete</ListBtn></ContItem>
        )}</ContList>)
}
export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.array ,
  deleteContact:PropTypes.func,
}
