import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, title, slug }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    );
    
    return (
        <Helmet
        title={title}
        defaultTitle={site.siteMetadata.title}
        meta={[
            {
                name: 'description',
                content: description || site.siteMetadata.description,
            },
        ]}/>
    )
}

export default SEO;