import { NextPage } from 'next';
import React from 'react';
import Actions from '../components/Actions';
import Board from '../components/Board/Board';
import ProfileHeader from '../components/ProfileHeader';
import { columns } from '../constants/mocks/board';
import Layout from '../containers/Layout';

const Home: NextPage = () => {
  const layoutStyles = {
    content: styles.content,
  };

  return (
    <Layout styles={layoutStyles}>
      <ProfileHeader />
      <Actions />
      <Board columns={columns} />
    </Layout>
  );
};

export default Home;

const styles = {
  content: {
    gap: 4,
    display: 'flex',
    flexDirection: 'column',
  },
};
