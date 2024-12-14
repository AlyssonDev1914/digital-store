import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 90vw;
  margin: 40px auto;
  padding-top: 20px;
  padding-bottom: 20px;  

  h2 {
    width: ${(props) => (props.link ? '90%' : '100%')};
    text-align: ${(props) => props.titleAlign}; 
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0.75px;
    margin: 0;
  }

  a {
    color: var(--primary);
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.75px;
    text-align: center;
    text-decoration: none;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center; 
  padding: 10px 0;  
`;

function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <SectionContainer titleAlign={titleAlign} link={link}>
      <div 
        style={{
          display: 'flex',
          justifyContent: titleAlign === 'center' ? 'center' : 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <h2>
          {title}
        </h2>

        {link && (
          <a href={link.href}>
            {link.text} <img src="/arrow.png" alt="seta" /> 
          </a>
        )}
      </div>

      
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default Section;
