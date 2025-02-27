import { PropertyCard } from "../PropertyCard";

export const Results = ({ properties }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
      {properties.map((property) => (
        <div key={property.databaseId}>
          <PropertyCard
            key={property.databaseId}
            title={property.title}
            destination={property.uri}
            bathrooms={property.PropertyFeatures.bathrooms}
            bedrooms={property.PropertyFeatures.bedrooms}
            price={property.PropertyFeatures.price}
            hasParking={property.PropertyFeatures.hasParking}
            petFriendly={property.PropertyFeatures.petFriendly}
            image={property?.featuredImage?.node?.sourceUrl}
          />
        </div>
      ))}
    </div>
  );
};
