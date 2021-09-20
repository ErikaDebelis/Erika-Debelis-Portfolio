import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from "react-icons/fa";
import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer
} from './NavDropDown';

const NavDropDown = (props) => {
  return (
    <DropDownContainer active={props.isOpen}>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <AiFillPhone/>
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Phone</DropDownItemTitle>
          <DropDownItemDesc>I'll update this </DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
        <AiOutlineMail/>
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Email</DropDownItemTitle>
          <DropDownItemDesc>Send me a message!</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
        <FaLocationArrow/>

        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Address</DropDownItemTitle>
          <DropDownItemDesc>Beaverton Oregon</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
    </DropDownContainer>
  )
}

export default NavDropDown;