import { Cover } from "pages/cover/Cover";
import { Heading } from "pages/Heading";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/heading' : {
        return <Heading key={block.id}/>
      }
      case "core/cover": {
    console.log(block,'bloc')

        return (
          <Cover key={block.id} background={block.attributes.url}>
            {/* <BlockRenderer blocks={block.innerBlocks} /> */}
            Cover Cover
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
