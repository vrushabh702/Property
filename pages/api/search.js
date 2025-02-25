import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

    let hasParkingFilter = ``;
    let petFriendlyFilter = ``;
    let minPriceFilter = ``;
    let maxPriceFilter = ``;

    if (filters.hasParking) {
      hasParkingFilter = `
      {
        key:"has_parking"
        compare:EQUAL_TO
        value:"1"
      },
      `;
    }

    if (filters.petFriendly) {
      hasParkingFilter = `
      {
        key:"has_parking"
        compare:EQUAL_TO
        value:"1"
      },
      `;
    }

    if (filters.minPrice) {
      minPriceFilter = `
      {
        key:"price"
        compare:GREATER_THAN_OR_EQUAL_TO
        value : ${filters.minPrice}
				type :NUMERIC
      }
      `;
    }

    if (filters.maxPrice) {
      maxPriceFilter = `
      {
        key:"price"
        compare:LESS_THAN_OR_EQUAL_TO
        value : ${filters.maxPrice}
				type :NUMERIC
      }
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: { offsetPagination: { offset: ${
            ((filters.page || 1) - 1) * 3
          }, size: 3 } 
                  metaQuery: {
        relation : AND
        metaArray: [
          ${petFriendlyFilter}
          ${hasParkingFilter}
          ${minPriceFilter}
          ${maxPriceFilter}
        ]}
          }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              title
              uri
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              PropertyFeatures {
                bathrooms
                bedrooms
                hasParking
                perFriendly
                price
              }
            }
          }
        }
      `,
    });
    console.log(data.properties.pageInfo.offsetPagination.total, "here");
    return res.status(200).json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (e) {
    console.log("Error", e);
  }
};

export default handler;
