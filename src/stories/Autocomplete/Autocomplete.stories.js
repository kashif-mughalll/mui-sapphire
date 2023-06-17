import React from 'react';
import Autocomplete from 'components/Autocomplete/Autocomplete';

const autocompleteData = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972, disabled: true },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957, disabled: true },
  { label: "Schindler's List", year: 1993, disabled: true },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  { label: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
];

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {},
};

const Template = (args) => <Autocomplete {...args} />;

export const CusAutocomplete = Template.bind({});
CusAutocomplete.args = {
  label: 'Famous Films',
  data: autocompleteData,
  required: false,
  disabled: false,
  error: false,
  helperText: '',
};
