import React from "react";
import styled from "styled-components";
import github from "../assets/icons/icons8-github.svg";
import twitter from "../assets/icons/icons8-twitter.svg";
import medium from "../assets/icons/icons8-medium-new.svg";

const BottomBar = styled.div`
  height: 5vh;
  margin: 0 auto;
  background: #fff;
  color: gray;
  width: 100vw;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  grid-row: 3;
  grid-column: 1/-1;
`;

const Copyright = styled.span`
  font-size: 1em;
`;

const SocialICons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinks = styled.a`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Image = styled.img`
  height: 2em;
  width: 2em;
`;

const social = [
  {
    id: 1,
    icon: github,
    link: "https://github.com/malhotra-parul",
    handle: "Github",
  },
  {
    id: 2,
    icon: twitter,
    link: "https://twitter.com/malhotra_parul",
    handle: "Twitter",
  },
  {
    id: 3,
    icon: medium,
    link: "https://medium.com/@parulm.business",
    handle: "Medium",
  },
];

const Footer = () => {
  const footer = "© Parul Malhotra ";

  return (
    <BottomBar>
      <Copyright>{footer}</Copyright>
      <SocialICons>
        {social.map(({ id, icon, link, handle }) => (
          <SocialLinks
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon} alt={handle} />
          </SocialLinks>
        ))}
      </SocialICons>
    </BottomBar>
  );
};

export default Footer;