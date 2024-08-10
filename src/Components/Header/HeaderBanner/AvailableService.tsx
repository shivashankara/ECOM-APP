'use client'
import { ServiceList, ServiceListWrapper } from "./BannerAddStyle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MessageIcon from "@mui/icons-material/Message";
import ReplayIcon from "@mui/icons-material/Replay";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const serviceListArray = [
  {
    serviceName: "Free shipping",
    tittle: "When you spend $80 or more",
    imageUrl: "",
    id: 1,
  },
  {
    serviceName: "We are available 24/7",
    tittle: "Need help? contact us anytime",
    imageUrl: "",
    id: 2,
  },
  {
    serviceName: "Satisfied or return",
    tittle: "Easy 30-day return policy",
    imageUrl: "",
    id: 2,
  },
  {
    serviceName: "100% secure payments",
    tittle: "Visa, Mastercard, Stripe, PayPal",
    imageUrl: "",
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
                  <LocalShippingIcon />
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
