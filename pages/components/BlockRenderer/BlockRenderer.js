export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        return <div key={block.id}>cover cover</div>;
      }
      default:
        return null;
    }
  });
};
