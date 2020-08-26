import styled from "@emotion/styled";

export const TransactionContainer = styled.div`
    width: 100%;
    padding: 12px;
    display: grid;
    grid-template: repeat(2, 26px) / 52px 3fr 3fr 6fr 2fr 2fr;
    border-bottom: 1px solid #434190;
    column-gap: 24px;
`;
export const TitleContainer = styled.div`
    display: flex;
    align-items: flex-end;
    &.amount{
        justify-content: flex-end !important;
    }
`;
export const Title = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #1A202C;
`;
export const Amount = styled.h2`
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    color: #1A202C;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Subtitle = styled.span`
    font-size: 14px;
    line-height: 19px;
    color: #4A5568;
`;