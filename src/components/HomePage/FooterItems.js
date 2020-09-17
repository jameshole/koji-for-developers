import React from 'react';
import styled from 'styled-components';
// Resources
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import BarChartIcon from '@material-ui/icons/BarChart';

// Koji platform
import ExtensionIcon from '@material-ui/icons/Extension';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';

// Company
import HelpIcon from '@material-ui/icons/Help';
import SecurityIcon from '@material-ui/icons/Security';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import CopyrightIcon from '@material-ui/icons/Copyright';
import PermMediaIcon from '@material-ui/icons/PermMedia';

// Contact
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';


const DiscordIcon = styled.img`
    display: flex;
    flex-direction: row !important;
    width: 21px;
    margin-right: 0;
`;

const ResourcesFooterItems = [
  {
    id: 1,
    icon: <DescriptionIcon />,
    name: 'Docs',
    link: 'https://developer.withkoji.com/docs/getting-started/introduction',
  },
  {
    id: 2,
    icon: <CodeIcon />,
    name: 'Reference',
    link: 'https://developer.withkoji.com/reference/packages/packages-overview',
  },
  {
    id: 3,
    icon: <GitHubIcon />,
    name: 'Github',
    link: 'https://github.com/madewithkoji',
  },
  {
    id: 4,
    icon: <OndemandVideoOutlinedIcon />,
    name: 'Developer tutorials',
    link: 'https://www.youtube.com/playlist?list=PLpzhdLI0f0z2vEJggWrXkcqw2hiy3cvCx',
  },
  {
    id: 5,
    icon: <DiscordIcon src="/images/discordIcon.png" />,
    name: 'Community',
    href: 'https://discord.com/invite/eQuMJF6',
  },
  {
    id: 6,
    icon: <RssFeedIcon />,
    name: 'Blog',
    link: 'https://blog.withkoji.com/',
  },
  {
    id: 7,
    icon: <BarChartIcon />,
    name: 'Status',
    link: 'http://www.kojistatus.com/',
  },
];

const KojiPlatformFooterItems = [
  {
    id: 1,
    icon: <CodeIcon />,
    name: 'Koji homepage',
    link: 'https://withkoji.com/',
  },
  {
    id: 2,
    icon: <ExtensionIcon />,
    name: 'Scaffolds',
    link: 'https://withkoji.com/create/scaffolds',
  },
  {
    id: 3,
    icon: <ShareOutlinedIcon />,
    name: 'Plugins',
    link: 'https://withkoji.com/resources/plugins',
  },
  {
    id: 4,
    icon: <DeveloperBoardIcon />,
    name: 'My projects',
    link: 'https://withkoji.com/projects', // This is not correct, change to correct link
  },
  {
    id: 5,
    icon: <MonetizationOnIcon />,
    name: 'My monetized assets',
    link: 'https://withkoji.com/partners/registered-assets',
  },
  {
    id: 6,
    icon: <SettingsIcon />,
    name: 'Account settings',
    link: 'https://withkoji.com/settings/account',
  },
];

const CompanyFooterItems = [
  {
    id: 1,
    icon: <HelpIcon />,
    name: 'About',
    link: 'https://withkoji.com/resources/about',
  },
  {
    id: 2,
    icon: <SecurityIcon />,
    name: 'Privacy policy',
    link: 'https://withkoji.com/resources/privacy',
  },
  {
    id: 3,
    icon: <AccessibilityNewIcon />,
    name: 'Terms of use',
    link: 'https://withkoji.com/resources/terms',
  },
  {
    id: 4,
    icon: <CopyrightIcon />,
    name: 'Copyright policy',
    link: 'https://withkoji.com/resources/copyright',
  },
  {
    id: 5,
    icon: <PermMediaIcon />,
    name: 'Media kit',
    link: 'https://drive.google.com/drive/folders/1us80XaJqpoj408HX4TeXxbPIc3ZjtM5y',
  },
];

const ContactFooterItems = [
  {
    id: 1,
    icon: <DiscordIcon src="/images/discordIcon.png" />,
    name: '',
    href: 'https://discord.com/invite/eQuMJF6',
  },
  {
    id: 2,
    icon: <TwitterIcon style={{ fontSize: 18 }} />,
    name: '',
    href: 'https://twitter.com/madewithkoji',
  },
  {
    id: 3,
    icon: <FacebookIcon />,
    name: '',
    href: 'https://www.facebook.com/madewithkoji/',
  },
  {
    id: 4,
    icon: <LinkedInIcon />,
    name: '',
    href: 'https://www.linkedin.com/company/withkoji/',
  },
  {
    id: 5,
    icon: <YouTubeIcon />,
    name: '',
    href: 'https://www.youtube.com/channel/UCc5jM6NwVNQc7b5APigEsMw',
  },

];

export { ResourcesFooterItems, KojiPlatformFooterItems, CompanyFooterItems, ContactFooterItems };
