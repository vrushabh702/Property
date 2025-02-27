import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

export const PropertyCard = ({
  title,
  destination,
  image,
  bedrooms,
  bathrooms,
  price,
  hasParking,
  petFriendly,
}) => {
  return (
    <Link href={destination}>
      <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="flex w-full">
          <Image src={image} height="200px" width="300px" objectFit="Cover" />
        </div>
        <div className="mt-3 text-lg font-bold">{title}</div>
        <div className="text-lg">${numeral(price).format("0,0")}</div>
        <div className="flex justify-between">
          <div>
            {/* <FontAwesomeIcon icon={faBathtub} /> */}
            <FontAwesomeIcon icon={faBath} />

            <span>{bathrooms}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBed} />
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <span>{bedrooms}</span>
          </div>
        </div>
        {(!hasParking || !petFriendly) && (
          <div className="flex justify-between text-sm mt-3">
            <div>
              {!hasParking && (
                <>
                  <FontAwesomeIcon icon={faCar} />
                  {/* <FontAwesomeIcon icon={faCar} /> */}
                  Parking Available
                </>
              )}
            </div>
            <div>
              {!petFriendly && (
                <>
                  <FontAwesomeIcon icon={faDog} />
                  {/* <FontAwesomeIcon icon={faCar} /> */}
                  petFriendly
                </>
              )}
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};
