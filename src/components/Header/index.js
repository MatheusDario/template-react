import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

import { Nav } from './style';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        {' '}
        <FaHome size={24} />
        {' '}
      </Link>
      <Link to="/login">
        {' '}
        <FaUserAlt size={22} />
        {' '}
      </Link>
      <Link to="/sair">
        {' '}
        <FaSignInAlt size={24} />
        {' '}
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
