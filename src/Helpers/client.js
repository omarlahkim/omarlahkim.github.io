import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "p2kkmivr", // find this at manage.sanity.io or in your sanity.json
    dataset: "lahkimblog", // this is from those question during 'sanity init'
    useCdn: true,
  });

