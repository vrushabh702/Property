import { gql } from "@apollo/client";
import client from "client";
import { mapMainMenuItems } from "./mapMainMenuItem";
import { CleanAndTransformBlock } from "./cleanAndTransformBlock";

export const getPageStaticProps = async (context) => {
  // console.log("Context getPageStatic", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
            seo {
              title
              metaDesc
            }
          }

          ... on Property {
            id
            title
            blocks
            seo {
              title
              metaDesc
              canonical
              focuskw
              readingTime
              breadcrumbs {
                url
                text
              }
              schema {
                pageType
              }
            }
            slug
            title
          }
        }

        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  return {
    props: {
      seo: data.nodeByUri.seo,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      callToActionLabel:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks: CleanAndTransformBlock(data.nodeByUri.blocks),
    },
  };
};
