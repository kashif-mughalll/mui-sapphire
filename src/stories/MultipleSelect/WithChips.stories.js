import { useState } from 'react';
import SudofyMultiselect from 'components/Dropdown/MultipleSelect';

const multipleSelectData = [
    {
        option: 'Option no. 1',
        value: '1'
    },
    {
        option: 'Option no. 2',
        value: '2',
    },
    {
        option: 'Option no. 3',
        value: '3',
        menuProps: {
            disabled: true
        }
    },
    {
        option: 'Option 4',
        value: '4',
    },
    {
        option: 'Option number 5',
        value: '5',
    },
];

export default {
    title: 'Components/Multiple Select/With Chips',
    component: SudofyMultiselect,
    argTypes: {
        value: {
            table: {
                disable: true
            }
        },
        onChange: {
            table: {
                disable: true
            }
        },
    }
};

const Template = (args) => {
    const [multipleSelectedOptions, setMultipleSelectedOptions] = useState([]);

    const handleChangeMultileSelect = (event) => {
        setMultipleSelectedOptions(event.target.value);
    };

    args.value = multipleSelectedOptions;
    args.onChange = handleChangeMultileSelect;
    return <SudofyMultiselect {...args} />
}

export const WithChips = Template.bind({});
WithChips.args = {
    label: 'Multiple Select',
    placeholder: 'Select options',
    options: multipleSelectData,
    required: false,
    chips: true,
    disabled: false,
    error: false,
    helperText: ''
};