import { SVGAttributes, FunctionComponent } from 'react';

import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from  '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';

interface Social {
  id: number;
  icon: any;
  link: string;
}

export const socials: Social[] = [
  {
    id: 1,
    icon: facebook,
    link: 'https://www.facebook.com/'
  },
  {
    id: 2,
    icon: twitter,
    link: 'https://twitter.com/'
  },
  {
    id: 3,
    icon: linkedin,
    link: 'https://www.linkedin.com/'
  },
  {
    id: 4,
    icon: github,
    link: 'https://github.com/'
  },
  {
    id: 5,
    icon: instagram,
    link: 'https://www.instagram.com/'
  }
];