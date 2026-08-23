import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaSpotify } from 'react-icons/fa';

import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/bio', label: 'Biografia' },
  { to: '/video', label: 'Video' },
];

const socialLinks = [
  { href: '#', label: 'Spotify', Icon: FaSpotify },
  { href: '#', label: 'Facebook', Icon: FaFacebookF },
  { href: '#', label: 'Instagram', Icon: FaInstagram },
] as const;

const getLinkClassName: NavLinkProps['className'] = ({ isActive }) =>
  `navbar__link${isActive ? ' navbar__link--active' : ''}`;

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <ul className="navbar__list">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={getLinkClassName}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="navbar__social">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="navbar__icon-link"
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon className="navbar__icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
