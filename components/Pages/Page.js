import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";

// const { BlockRenderer } = require("components/BlockRenderer");
// const { MainMenu } = require("components/MainMenu");
export const Page = (props) => {
  console.log("pages console", props);
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: props.seo?.breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.text,
      item: breadcrumb.url,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    mainEntityOfPage: props.seo?.canonical,
    headline: props.seo?.title,
    description: props.seo?.metaDesc || "Default description if empty",
    // url: props.seo?.canonical,   //SOME HOW MANIPULATE DESIGN
    image: props.seo?.featuredImage || "default-image-url.jpg",
  };

  return (
    <div>
      <PageWrapper
        value={{
          PropertyFeatures: props.PropertyFeatures,
          title: props.title,
          featuredImage: props.featuredImage,
        }}
      >
        <Head>
          <title>{props.seo.title}</title>
          <meta name="description" content={props.seo.metaDesc} />

          {/* Meta Robots */}
          <meta name="robots" content={props.seo?.robotsContent} />

          {/* Canonical URL */}
          {/* <link rel="canonical" href={props.seo?.canonical} /> */}
          {/* THIS THING SOME HOW MANIPULATE DESIGN SO CAREFULL */}

          {/* Open Graph Tags */}
          <meta property="og:title" content={props.seo?.title} />
          <meta property="og:description" content={props.seo?.metaDesc} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={props.seo?.canonical} />

          <script type="application/ld+json">
            {JSON.stringify(breadcrumbJson)}
          </script>

          {/* WebPage Schema Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(webPageSchema)}
          </script>
        </Head>

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
