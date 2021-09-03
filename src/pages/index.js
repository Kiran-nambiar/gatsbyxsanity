import React from 'react';
import BannerImage from '../components/common/careers/BannerImage';
import Careers from '../components/common/careers/Careers';
import { graphql, useStaticQuery } from 'gatsby';

export default function Index() {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      sanityBanner(id: { in: "-05078ba4-5ed5-5c85-a990-146a131fd8fc" }) {
        title
        _id
        bannerImage {
          asset {
            url
          }
        }
      }
    }
  `);

  const { asset } = data.sanityBanner.bannerImage;

  return (
    <>
      <div className='container-fluid px-0'>
        <div className='row'>
          <div className='col-12'>
            <BannerImage url={asset.url} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Careers />
          </div>
        </div>
      </div>
    </>
  );
}
