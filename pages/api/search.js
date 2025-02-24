import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: { offsetPagination: { offset: 0, size: 3 } }) {
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
    return res.status(200).json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (e) {
    console.log("Error", e);
  }
};

export default handler;
