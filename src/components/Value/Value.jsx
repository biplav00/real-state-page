import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="value.png" alt="home" />
          </div>
        </div>
        {/* Right Side */}
        <div className="flexColStart v-right">
          <span>Our Value</span>Value We Give to You<span></span>We are always
          ready to help by providing the best services for you. <br />
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Value;
