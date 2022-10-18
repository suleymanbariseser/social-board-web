import { NextPage } from 'next';
import React from 'react';
import Board from '../components/Board/Board';
import { columns } from '../constants/mocks/board';
import Layout from '../containers/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Board columns={columns} />
    </Layout>
  );
};

export default Home;
