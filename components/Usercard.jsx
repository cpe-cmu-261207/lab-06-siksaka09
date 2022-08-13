import React, { userstate, useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import Usercarddetail from "./Usercarddetail";
const Usercard = (props) => {
  const [click, setclick] = useState(false);
  return (
    <div
      className="border-bottom"
      onClick={() => {
        click ? setclick(false) : setclick(true);
      }}
    >
      <div className="d-flex align-items-center p-3">
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />

        <span className="text-center display-6 me-auto">{props.name}</span>
        {!click && <IconChevronDown />}
        {click && <IconChevronUp />}
      </div>
      {click && <Usercarddetail email={props.email} address={props.address} />}
    </div>
  );
};

export default Usercard;
