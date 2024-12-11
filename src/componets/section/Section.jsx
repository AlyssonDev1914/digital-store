import React from "react";
import PropTypes from "prop-types";

function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section>
      <h2 
        style={{ 
          textAlign: titleAlign, 
          color: '--dark-gray-2', 
          fontSize: '24px', 
          marginLeft: titleAlign === 'center' ? 'auto' : '160px',  
          marginRight: titleAlign === 'center' ? 'auto' : '0', 
          width: titleAlign === 'center' ? 'fit-content' : 'auto' 
        }}
      >
        {title}
      </h2>

      {link && (
        <a
          href={link.href}
          style={{ color: 'primary',
          fontSize: '18px',
          float: 'right',
          verticalAlign: 'middle', 
          marginLeft: '400px'
        }}
        >
          {link.text}
        </a>
      )}

      <div>{children}</div>
    </section>
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
