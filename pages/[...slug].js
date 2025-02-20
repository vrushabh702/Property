import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { CleanAndTransformBlock } from "utils/cleanAndTransformBlock";

export default function Page(props) {
  console.log("page props", props);
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  console.log("context : ", context);
  const uri = `/${context.params.slug.join("/")}/`;
  console.log("URI: ", uri);
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  const blocks = CleanAndTransformBlock(data.nodeByUri.blocks);
  return {
    props: {
      title: data.nodeByUri.title,
      blocks: blocks,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes
      .filter((page) => page.url !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: "blocking",
  };
};
