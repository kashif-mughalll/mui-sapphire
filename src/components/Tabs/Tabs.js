import React from 'react';
import styledComponent from 'components/styled/styled';
import { Tabs as TabsUnstyled, TabsList as TabsListUnstyled, TabPanel as TabPanelUnstyled } from "@mui/base";
// import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { Tab as TabUnstyled } from "@mui/base";
import colors from 'utils/colors';
import PropTypes from "prop-types";

const Tab = styledComponent(TabUnstyled, `
  font-family: poppins;
  color: ${colors.greyText[900]};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  padding: 0 24px;
  height: 36px;
  margin: 4px;
  border: none;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.greyText[10]};
  }

  &:focus {
    color: ${colors.secondary.main};
    background-color: ${colors.primary[500]};
    border-radius: 36px;
    outline: none;
  }

`);

const TabsList = styledComponent(TabsListUnstyled, `
  width: max-content;
  background-color: ${colors.secondary.main};
  height: 48;
  padding: 1px;
  border: 1px solid ${colors.greyText[40]};
  box-sizing: border-box;
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`);

const TabPanel = styledComponent(TabPanelUnstyled, `
  width: 100%;
  font-family: poppins;
  font-size: 14px;
  margin-top: 10px;
`);

const generateTabs = (data, tabPanelProps) => {
  return data.reduce(([tabs, tabsContent], { name, content, ...tabProps }, index) => {
    tabs.push(<Tab {...tabProps} key={index}>{name}</Tab>);
    tabsContent.push(<TabPanel key={index} value={index} {...tabPanelProps}>{content}</TabPanel>);
    return [tabs, tabsContent];
  }, [[], []]);
}

const Tabs = ({ data, tabsProps, panelProps, ...props }) => {
  const [tabs, tabsPanels] = generateTabs(data, panelProps);

  return (
    <TabsUnstyled {...tabsProps} selectionFollowsFocus defaultValue={0}>
      <TabsList> {tabs} </TabsList>
      {tabsPanels}
    </TabsUnstyled>
  );
}

Tabs.propTypes = {
  data: PropTypes.array,
  tabsProps: PropTypes.object,
  panelProps: PropTypes.object
}

Tabs.defaultProps = {
  data: [],
  tabsProps: {},
  panelProps: {}
}

export default Tabs;