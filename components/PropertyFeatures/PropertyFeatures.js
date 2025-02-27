import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";
import React from "react";

export const PropertyFeatures = ({
  hasParking,
  petFriendly,
  bedrooms,
  bathrooms,
  price,
}) => {
  console.log("property Features data");
  return (
    <div className="max-w-lg mx-auto my-10 bg-white text-slate-900 p-5 text-center">
      <div className="grid grid-cols-2 mb-4 gap-y-5">
        <div>
          <FontAwesomeIcon icon={faBed} />
          {bedrooms} Bedrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBath} />
          {bathrooms} Bathrooms
        </div>
        <div>
          {!!petFriendly && (
            <>
              <FontAwesomeIcon icon={faDog} />
              Pet Friendly
            </>
          )}
        </div>
        <div>
          {!!hasParking && (
            <>
              <FontAwesomeIcon icon={faCar} />
              Parking Available!
            </>
          )}
        </div>
      </div>
      <h3 className="text-5xl font-bold">$ {numeral(price).format("0,0")}</h3>
    </div>
  );
};
