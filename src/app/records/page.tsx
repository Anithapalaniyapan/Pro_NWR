'use client';

import React from 'react';
import Layout from '../../components/Layout';
import NominationFormSection from './NominationFormSection';
import RulesSection from './RulesSection';

const Records: React.FC = () => {
  return (
    <Layout>
      {/* Nomination Form Section */}
      <div id="nomination-forms">
        <NominationFormSection />
      </div>
      {/* Rules Section */}
      <RulesSection />
    </Layout>
  );
};

export default Records;