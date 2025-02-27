import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";

// const { BlockRenderer } = require("components/BlockRenderer");
// const { MainMenu } = require("components/MainMenu");
export const Page = (props) => {
  return (
    <div>
      <PageWrapper
        value={{
          PropertyFeatures: props.PropertyFeatures,
          title: props.title,
          featuredImage: props.featuredImage,
        }}
      >
        <MainMenu
          items={props.mainMenuItems}
          callToActionLabel={props.callToActionLabel}
          callToActionDestination={props.callToActionDestination}
        />
        <BlockRenderer blocks={props.blocks} />
      </PageWrapper>
    </div>
  );
};
