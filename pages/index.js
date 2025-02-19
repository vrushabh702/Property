import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "./components/BlockRenderer/BlockRenderer";
import { CleanAndTransformBlock } from "utils/cleanAndTransformBlock";

export default function Home(props) {
  console.log(props);
  return (
    <div className="text-bold text-5xl text-blue-400">
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
      }
    `,
  });
  return {
    props: {
      blocks: CleanAndTransformBlock(data.nodeByUri.blocks),
    },
  };
};
