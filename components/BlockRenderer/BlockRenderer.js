import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover/Cover";
import { FormSpreeForm } from "components/FormspreeForm";
import { Heading } from "components/Heading/Heading";
import { Paragraph } from "components/Paragraph";
import { PostTitle } from "components/PostTitle";
import { PropertyFeatures } from "components/PropertyFeatures";
import { PropertySearch } from "components/PropertySearch";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "acf/propertyfeatures": {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bathrooms={block.attributes.bathrooms}
            bedrooms={block.attributes.bedrooms}
            hasParking={block.attributes.has_parking}
            petFriendly={block.attributes.pet_friendly}
          />
        );
      }
      case "acf/formspreeform": {
        return (
          <FormSpreeForm
            key={block.id}
            // formId={block.attributes.data.form_id}
            formId={block.attributes.data.form_id}
          />
        );
      }
      case "acf/ctabutton": {
        console.log("block blockrender", block.attributes);
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              // theme[block.attributes.style.elements?.link?.color?.text] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      // case "core/post-title": {
      //   return (
      //     <PostTitle
      //       key={block.id}
      //       content={block.attributes.content}
      //       level={block.attributes.level}
      //       textAlign={block.attributes.textAlign}
      //     />
      //   );
      // }

      case "core/post-title":
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }

      case "acf/propertysearch": {
        return <PropertySearch key={block.id} />;
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column key={block.id} width={block.attributes.width}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/block":
      case "core/group": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }

      case "core/image": {
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
          />
        );
      }

      default: {
        console.log("Unknown", block);
        return null;
      }
    }
  });
};
