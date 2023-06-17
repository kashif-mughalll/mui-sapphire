import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { sizes } from 'utils/constants';

function allAreChecked(items) {
    return items.every((item) => item.checked === true);
}

function allAreNotChecked(items) {
    return items.every((item) => item.checked === false);
}

const IndeterminateCheckbox = ({ data, size, boxProps }) => {
    const [checkboxData, setCheckboxData] = useState(data);

    const handleChangeParent = (event, index) => {
        const data = [...checkboxData];
        const children = [...data[index].children];
        const items = children.map((item) => {
            item.checked = event.target.checked;
            return item;
        });
        data[index].children = items;
        setCheckboxData(data);
    };

    const handleChangeChild = (event, index, parentIndex) => {
        const items = [...checkboxData];
        const item = { ...items[parentIndex] };
        const itemChildren = [...item.children];
        const itemChild = { ...itemChildren[index] };
        itemChild.checked = event.target.checked;
        itemChildren[index] = itemChild;
        item.children = itemChildren;
        items[parentIndex] = item;
        setCheckboxData(items);
    };

    const generateChildren = (childrenList, direction, parentIndex) => {
        const children = (
            <Box sx={{ display: "flex", flexDirection: `${direction ? direction : null}`, ml: 3, ...boxProps }}>
                {childrenList.map(({ label, checked, ...itemProps }, index) => (
                    <FormControlLabel key={index} label={label} size={size}
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={(e) => {
                                    handleChangeChild(e, index, parentIndex);
                                }}
                            />
                        }
                        {...itemProps}
                    />
                ))}
            </Box>
        );
        return children;
    }

    return (
        <>
            {checkboxData.map((dataItem, index) => {
                return (
                    <Fragment key={index}>
                        <FormControlLabel label={dataItem.label} size={size}
                            control={
                                <Checkbox
                                    onChange={(e) => { handleChangeParent(e, index) }}
                                    checked={allAreChecked(checkboxData[index]?.children)}
                                    indeterminate={!allAreChecked(checkboxData[index]?.children) && !allAreNotChecked(checkboxData[index]?.children)}
                                />
                            }
                        />
                        {generateChildren(checkboxData[index]?.children, checkboxData[index]?.direction, index)}
                    </Fragment>
                );
            })}
        </>
    );
}

IndeterminateCheckbox.propTypes = {
    data: PropTypes.array,
    size: PropTypes.oneOf(sizes),
    boxProps: PropTypes.object
}

IndeterminateCheckbox.defaultProps = {
    data: [],
    size: 'medium',
    boxProps: {}
};

export default IndeterminateCheckbox;