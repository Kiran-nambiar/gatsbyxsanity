import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import BlockContent from '../BlockContent'
import styled from "styled-components"

const Careers = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            sanitySummary(id: {in: "-0dbda172-a6cd-5e1c-8d86-d59ac6d3f857"}) {
                 title
                 buttonText
                 link
                 _rawDescription
            }
        }
    `)

    return (
        <StyledWrapper>
            <h1 className="text-center my-5">{data.sanitySummary.title}</h1>
            <div className="block-content mx-auto">
                <a href={data.sanitySummary.link}>
                    <p className="mb-3">{data.sanitySummary.buttonText}</p>
                </a>
                <BlockContent projectId="hdeyuxv8" dataset="production" body={data.sanitySummary._rawDescription} />
            </div>
        </StyledWrapper>
    )
}

export default Careers;

const StyledWrapper = styled.div`
    .block-content {
        max-width: 1000px;
    }

    margin-bottom: 100px;
`
