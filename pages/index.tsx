import { NextPage } from 'next';
import React from 'react';
import Board from '../components/Board/Board';
import { columns } from '../constants/mocks/board';

const Home: NextPage = () => {
  return <Board columns={columns} />;
};

export default Home;
