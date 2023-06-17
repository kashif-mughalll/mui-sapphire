import React from 'react';
import './App.css';
import { useState } from 'react';
import Text from "./components/Typography/Typography";
import Avatar from 'components/Avatar/Avatar';
import AvatarWithText from 'components/AvatarWithText/AvatarWithText';
import Link from 'components/Link/Link'
import RadioGroup from 'components/RadioGroup/RadioGroup';
import colors from 'utils/colors';
import Dropdown from 'components/Dropdown/Dropdown';
import Tooltip from 'components/Tooltip/Tooltip';
import Button from 'components/Button/Button';

import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Checkbox from 'components/Checkbox/Checkbox';
// import Checkbox from 'components/Checkbox/Checkbox';
import IndeterminateCheckbox from 'components/IndeterminateCheckbox/IndeterminateCheckbox';
import Tabs from 'components/Tabs/Tabs';
import Chip from 'components/Chip/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Switch from 'components/Switch/Switch';
import PuffinIcon from 'assets/icon.png';
import MultipleSelect from 'components/Dropdown/MultipleSelect';

import Autocomplete from 'components/Autocomplete/Autocomplete';
// Icons for breadcrumbs
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WhatshotIcon from '@mui/icons-material/Whatshot';


import BottomNavigation from 'components/BottomNavigation/BottomNavigation';
import BottomNavigationAction from 'components/BottomNavigationAction/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Drawer from 'components/Drawer/Drawer';

//#region For Breadcrumbs Testing Only
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Input from 'components/Input/Input';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Homepage = () => {
  return <h1>Home page </h1>;
};

const Aboutpage = () => {
  return <h1>About page</h1>;
};

const Servicespage = () => {
  return <h1>Services page</h1>;
};
//#endregion For Breadcrumbs Testing Only


function checkButtonClick(value) {
  console.log(value);
}

function App() {


  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };



  // const usersData = [
  //   { id: '1', name: 'Remy Sharp', src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' },
  //   { id: '2', name: 'Travis Howard', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOT-RdyXh3Rj66bIYic-F-47JLgOPnLe56A&usqp=CAU' },
  //   { id: '3', name: 'Cindy Baker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-yfdxWGlvmsZrGLArkEyJzuUOF43G_UFIA&usqp=CAU' },
  //   { id: '4', name: 'Agnes Walker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
  //   { id: '5', name: 'Trevor Henderson', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
  // ];

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

  const dataForCheckbox = [
    { label: "abc" },
    { label: "cde" },
    { label: "fgh", defaultChecked: true, disabled: true },
  ]
  const newData = [
    {
      label: 'Parent 1',
      direction: 'column',
      children: [
        { label: 'P1 C1', checked: false, disabled: true },
        { label: 'P1 C2', checked: false },
        { label: 'P1 C3', checked: false },
      ]
    },
    {
      label: 'Parent 2',
      children: [
        { label: 'P2 C1', checked: true },
        { label: 'P2 C2', checked: false },
        { label: 'P2 C3', checked: false },
      ]
    }
  ];

  const tabsData = [
    {
      name: "Tab 1",
      content: "First content"
    },
    {
      name: "Tab 2",
      content: "second page"
    },
    {
      name: "Tab 3",
      content: "third page",
      disabled: true
    },
    {
      name: "Tab 4",
      content: "fourth page"
    },
  ];

  //#region Dropdown
  const dropdownOptions = [ // send as props named as options
    {
      option: 'Without Avatar 1 adfklaf dasklfjaklsdf dsafkljjasdfjk',
      value: 120,
    },
    {
      option: 'Without Avatar 2',
      value: 130,
      menuProps: {
        disabled: true
      }
    },
    {
      option: 'Without Avatar 3',
      value: 140,
    },
    {
      option: 'Ten dasfjkk ajksdf  jkadjksfjsdajk sdjkafjasjkadjksfjsdajk sdjkafjas',
      value: 10,
      avatar: <PuffinIcon />
    },
    {
      option: 'Twenty',
      value: 20,
      avatar: <Avatar size='xs' name={'Sample'} src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
    },
    {
      option: 'Thirty',
      value: 30,
      avatar: <FaceIcon />
    },
    {
      option: 'Forty',
      value: 40,
      avatar: <FaceIcon />
    },
  ];

  // Handle value and onChange by user
  const [dropdownValue, setDropdownValue] = useState('');

  const handleChange = (event) => {
    setDropdownValue(event.target.value);
  };
  //#endregion Dropdown

  //#region Multiple Select
  const multipleSelectOptions = [
    {
      option: 'Option no. 1',
      value: '1',
    },
    {
      option: 'Option no. 2',
      value: '2',
      menuProps: {
        disabled: true
      }
    },
    {
      option: 'Option no. 3',
      value: '3',
    },
    {
      option: 'Option 4',
      value: '4',
    },
    {
      option: 'Option 5',
      value: '5',
    },
  ];

  const [multipleSelectedOptions, setMultipleSelectedOptions] = useState([]);

  const handleChangeMultileSelect = (event) => {
    setMultipleSelectedOptions(event.target.value);
  };
  //#endregion Multiple Select

  const breadcrumbsData = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Services',
      href: '/about/services'
    },
  ];

  const breadcrumbsDataWithIcon = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon />
    },
    {
      label: 'About',
      href: '/about',
      icon: <InfoIcon />
    },
    {
      label: 'Services',
      href: '/about/services',
      icon: <WhatshotIcon />
    },
  ];

  const [navigationValue, setNavigationValue] = useState(0);

  return (
    <div className="App">
      <div>
        <Button onClick={toggleDrawer("bottom", true)}>{"bottom"}</Button>
        <Drawer
          anchor={"bottom"}
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          <h2 style={{ textAlign: "center" }}>drawer content</h2>
        </Drawer>
      </div>
      <div style={{ position: 'fixed', bottom: 0, right: 0, left: 0, zIndex: 1 }}>
        <BottomNavigation
          showLabels
          value={navigationValue}
          onChange={(event, newValue) => {
            setNavigationValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
      <Text variant='h4'>Working on Radio Button</Text>
      <Link>abc</Link>
      <br />
      <br />
      <br />
      <Text variant="h1">Input</Text>
      <br />
      <Input sx={{ width: 300 }} label='With Password' type='password' placeholder='Checking Password' />
      <Input label='With Button' type='button' sx={{ width: 400 }} onClick={checkButtonClick} placeholder='Checking Password' />
      <br />
      <br />
      <Input type='date' label='Date' placeholder='Enter Number' />
      <br />
      <br />
      <Input type='time' label='Time' placeholder='Enter Number' />
      <br />
      <br />
      <Input type='datetime-local' label='Date Time' placeholder='Enter Number' />
      <br />
      <br />
      <Input type='number' label='Number Field' placeholder='Enter Number' />
      <br />
      <br />
      <Input characterLimit={20} id="outlinedfsdfdsd-basic" label='Text Input Count' placeholder='Text Field' />
      <br />
      <br />
      <Input label='Disabled field' id="outlined-basic" placeholder='With Placeholder' disabled />
      <br />
      <br />
      <Input label='Disabled field' defaultValue="With Default Value" placeholder='Text Field' disabled />
      <br />
      <br />
      <Input
        id="example-1"
        placeholder="Write here"
        label="Text Label"
        required
      />
      <br />
      <br />
      <Input
        id="example-2"
        placeholder="Without label"
        label=' '
      />
      <br />
      <br />
      <Input
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
      />
      <br />
      <br />
      <Input
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={6}
        placeholder="Write here..."
      />
      <br />
      <br />
      <Input startAdornment={<AccountCircle />} endAdornment={'USD'} label="With Icon" placeholder="Enter Username" />
      <Dropdown sx={{ width: '300px' }} required onChange={handleChange} value={dropdownValue} options={dropdownOptions} label='Dropdown' placeholder='Select an option' id="abcd112as2" />
      <br />
      <br />
      <Dropdown helperText='Helper text...' options={dropdownOptions} id="abcd1122" />
      <br />
      <br />
      <Dropdown />
      <br />
      <br />
      <MultipleSelect required label='Multiple Select' placeholder='Select options' onChange={handleChangeMultileSelect} value={multipleSelectedOptions} chips={true} options={multipleSelectOptions} />
      <br />
      <br />
      <br />
      {/* <Tooltip placement='left' title="Example tooltip" renderComponent={<Button text="Tooltip Button" />} /> */}
      <Tooltip placement='left' title="Tooltip Example" ><Button text="Tooltip Button" /></Tooltip>
      <br />
      <br />
      <Button text='As Text' />
      <br />
      <br />
      <Link>abc</Link>
      <br />
      <br />
      <Autocomplete placeholder='checking...' label='Autocomplete' id='12345' data={autocompleteData} required helperText='Helper text here...' />
      <br />
      {/* <Tabs data={tabsData} panelProps={{ style: { marginTop: 20 } }} /> */}
      <Tabs data={tabsData} />
      <Text variant='h2'>Chips</Text>
      <br />
      <Chip label='Simple' />
      <br />
      <br />
      <Chip
        label='With Avatar'
        avatar={<Avatar
          name="Arsalan Ali"
          src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />}
      />
      <br />
      <br />
      <Chip
        label='With Avatar'
        avatar={<Avatar
          name="Arsalan Ali"
          src="https://photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />}
      />
      <br />
      <br />
      <Chip
        label='With Icon'
        icon={<FaceIcon />}
      />
      <br />
      <br />
      <Chip
        label='Clickable'
        onClick={() => { }}
      />
      <br />
      <br />
      <Chip
        label='Deleteable'
        onDelete={() => { }}
      />
      <br />
      <br />
      <Chip
        label='Deleteable With Avatar'
        onDelete={() => { }}
        avatar={<Avatar
          name="Arsalan Ali"
          src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />}
      />
      <br />
      <br />
      <Chip
        label='Deleteable + Deleteable'
        onClick={() => { }}
        onDelete={() => { }}
      />

      <Switch label='Switch' defaultChecked size='small' />
      <Switch label='Switch' defaultChecked disabled size='medium' />
      <Switch label='Switch' disabled size='large' />
      <br />
      <br />
      <IndeterminateCheckbox data={newData} />
      <IndeterminateCheckbox data={newData} size='small' />
      <br />
      <Checkbox data={dataForCheckbox} size={'small'} row labelPlacement={'top'} />
      <br />
      <Checkbox data={dataForCheckbox} size={'small'} />
      <br />
      <Checkbox data={dataForCheckbox} size={'medium'} />
      <br />
      <Checkbox data={dataForCheckbox} size={'large'} />
      <br />
      <Text fontFamily='ubuntu'>This is a <Link href="https://google.com">Link open on same page</Link> component</Text>
      <Text>This is a <Link href="https://google.com" target='_blank'>Link open on new page</Link> component</Text>
      <br />
      <RadioGroup labelPlacement={'top'} size="large" onChange={(e) => { console.log(e.target.value) }} row data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other', disabled: true }]} />
      <br />
      <RadioGroup size="medium" onChange={(e) => { console.log(e.target.value) }} row data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other', disabled: true }]} />
      <br />
      <RadioGroup size="small" onChange={(e) => { console.log(e.target.value) }} data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other', disabled: true }]} />
      <br />
      <br />
      <RadioGroup id="redio-button-example" data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }]} />
      <Avatar badgeContent={5} sx={{ backgroundColor: "red" }} size="xl" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar badgeProps={{
        badgeContent: 4
      }} size="lg" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar size="md" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar size="sm" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar size="xs" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <br />
      <br />
      <Avatar size="xl" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar size="lg" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar size="md" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar size="sm" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
      <Avatar size="xs" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />


      <AvatarWithText nameProps={{ variant: 'body2', fontWeight: 700, color: colors.greyText[900] }} emailProps={{ variant: 'body2', color: colors.greyText[700] }} name='John Smith' email='john@gmail.com' src='https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' />
      <br />
      <AvatarWithText name='John Smith' email='john@gmail.com' src='https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' />


      <br />
      <br />

      <BrowserRouter>
        <div className="App">
          <Text variant='h4'>Typography component</Text>
          <br />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='/about/services' element={<Servicespage />} />
          </Routes>

          <Breadcrumbs data={breadcrumbsData} />
          <br />
          <br />
          <Breadcrumbs data={breadcrumbsDataWithIcon} />
          <br />
          <br />
          <br />
          <Link>abc</Link>
          <br />
          <Text fontFamily='ubuntu'>This is a <Link href="https://google.com">Link open on same page</Link> component</Text>
          <Text>This is a <Link href="https://google.com" target='_blank'>Link open on new page</Link> component</Text>
          <br />
          <RadioGroup labelPlacement={'top'} size="large" onChange={(e) => { console.log(e.target.value) }} row data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other', disabled: true }]} />
          <br />
          <RadioGroup size="medium" onChange={(e) => { console.log(e.target.value) }} row data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other', disabled: true }]} />
          <br />
          <RadioGroup size="small" onChange={(e) => { console.log(e.target.value) }} data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other', disabled: true }]} />
          <br />
          <br />
          <RadioGroup id="redio-button-example" data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }]} />
          <Avatar badgeContent={5} sx={{ backgroundColor: "red" }} size="xl" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar badgeProps={{
            badgeContent: 4
          }} size="lg" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar size="md" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar size="sm" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar size="xs" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <br />
          <br />
          <Avatar size="xl" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar size="lg" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar size="md" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar size="sm" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
          <Avatar size="xs" name="Haryr" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />


          <AvatarWithText nameProps={{ variant: 'body2', fontWeight: 700, color: colors.greyText[900] }} emailProps={{ variant: 'body2', color: colors.greyText[700] }} name='John Smith' email='john@gmail.com' src='https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' />
          <br />
          <AvatarWithText name='John Smith' email='john@gmail.com' src='https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' />

          <br />
          <br />




          <Link>abc</Link>
          <br />
          <br />
          {/* <Tabs data={tabsData} panelProps={{ style: { marginTop: 20 } }} /> */}
          <Tabs data={tabsData} />
          <Text variant='h2'>Chips</Text>
          <br />
          <Chip label='Simple' />
          <br />
          <br />
          <Chip
            label='With Avatar'
            avatar={<Avatar
              name="Arsalan Ali"
              src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />}
          />
          <br />
          <br />
          <Chip
            label='With Avatar'
            avatar={<Avatar
              name="Arsalan Ali"
              src="https://photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />}
          />
          <br />
          <br />
          <Chip
            label='With Icon'
            icon={<FaceIcon />}
          />
          <br />
          <br />
          <Chip
            label='Clickable'
            onClick={() => { }}
          />
          <br />
          <br />
          <Chip
            label='Deleteable'
            onDelete={() => { }}
          />
          <br />
          <br />
          <Chip
            label='Deleteable With Avatar'
            onDelete={() => { }}
            avatar={<Avatar
              name="Arsalan Ali"
              src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />}
          />
          <br />
          <br />
          <Chip
            label='Deleteable + Deleteable'
            onClick={() => { }}
            onDelete={() => { }}
          />

          <Switch label='Switch' defaultChecked size='small' />
          <Switch label='Switch' defaultChecked disabled size='medium' />
          <Switch label='Switch' disabled size='large' />
          <br />
          <br />
          <IndeterminateCheckbox data={newData} />
          <IndeterminateCheckbox data={newData} size='small' />
          <br />
          <Checkbox data={dataForCheckbox} size={'small'} row labelPlacement={'top'} />
          <br />
          <Checkbox data={dataForCheckbox} size={'small'} />
          <br />
          <Checkbox data={dataForCheckbox} size={'medium'} />
          <br />
          <Checkbox data={dataForCheckbox} size={'large'} />

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
