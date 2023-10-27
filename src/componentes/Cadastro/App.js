import React, { useState } from 'react';
import SearchBar from './SearchBar';

const App = () => {
  const estados = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará',
    'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará',
    'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima',
    'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ];

  const [searchResults, setSearchResults] = useState(estados);

  const handleSearch = (query) => {
    const filteredStates = estados.filter(estado =>
      estado.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredStates);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((estado, index) => (
          <li key={index}>{estado}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
