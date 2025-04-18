import React from 'react';
import ccard from './countriescard';

const countries = [
  {
    name: 'United States',
    description: 'The United States is a federal republic of 50 states, a capital district, and a few other territories.',
    longDescription: 'The United States of America (USA), commonly known as the United States (U.S. or US), or America, is a federal republic composed of 50 states, a federal district, five major self-governing territories, and various possessions.',
    imageUrl: 'https://images.unsplash.com/photo-1523981049214-7ea5e04b694b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwd29ybGQlMjBvZiUyMHRoZSUyMG51bWJlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'United Kingdom',
    description: 'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK or U.K.) or Britain.',
    longDescription: 'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK or U.K.) or Britain, is a sovereign country located off the north­western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north­eastern part of the island of Ireland, and many smaller islands.',
    imageUrl: 'https://images.unsplash.com/photo-1578344583803-2c9fd6e3e6c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGhlJTIwdW5pdGVkJTIwaG9tZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  // add more countries here
];

const CountriesPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {universities.map((university, index) => (
          <ccard key={index} university={university} />
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
