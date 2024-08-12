"use client";
import { ServiceList, ServiceListWrapper } from "./BannerAddStyle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MessageIcon from "@mui/icons-material/Message";
import ReplayIcon from "@mui/icons-material/Replay";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast,faCommentDots,faUndoAlt,faCreditCard} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
const iconMap: { [key: string]: IconDefinition } = {
  faShippingFast: faShippingFast,
  faCommentDots: faCommentDots,
  faUndoAlt: faUndoAlt,
  faCreditCard: faCreditCard,
 
}
const serviceListArray = [
  {
    serviceName: "Free shipping",
    tittle: "When you spend $80 or more",
    imageUrl: iconMap.faShippingFast,
    id: 1,
  },
  {
    serviceName: "We are available 24/7",
    tittle: "Need help? contact us anytime",
    imageUrl: iconMap.faCommentDots,
    id: 2,
  },
  {
    serviceName: "Satisfied or return",
    tittle: "Easy 30-day return policy",
    imageUrl: iconMap.faUndoAlt,
    id: 2,
  },
  {
    serviceName: "100% secure payments",
    tittle: "Visa, Mastercard, Stripe, PayPal",
    imageUrl:  iconMap.faCreditCard,
    id: 3,
  },
];

export default function AvailableServices() {
  return (
    <div style={{}}>
      <ServiceListWrapper>
        <ServiceList>
          <ul>
            {serviceListArray.map((list) => {
              return (
                <li key={list.id}>
                  {/* <LocalShippingIcon /> */}

                  <FontAwesomeIcon icon={list.imageUrl} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>{list.serviceName}</span>
                    <span>{list.tittle}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </ServiceList>
      </ServiceListWrapper>
    </div>
  );
}
