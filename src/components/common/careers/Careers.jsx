import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import BlockContent from '../BlockContent'
import styled from "styled-components"

const Careers = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            sanitySummary(id: {ne: "08367798-19bf-4ac5-a447-48e3f82f35a4"}) {
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
