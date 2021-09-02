import React from 'react'
import styled from "styled-components"

const BannerImage = ({ url }) => {
    return (
        <StyledWrapper>
            <img className="img-fluid" src={url} alt="" />
        </StyledWrapper>
    )
}

export default BannerImage;

const StyledWrapper = styled.div`
    img {
        height: 80vh;
        width: 100%;
        object-fit: cover;
    }
`