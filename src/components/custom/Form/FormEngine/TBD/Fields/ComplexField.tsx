import { define, string,oneOf, someOf, SomeOfBuilder, OneOfBuilder } from '@react-form-builder/core';
import React, { useEffect, useState } from 'react';

interface BoxProps {
    color: string;
    onClick: () => void;
}

const Box: React.FC<BoxProps> = ({ color, onClick }) => {
    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: color,
                cursor: 'pointer',
            }}
            onClick={onClick}
        ></div>
    );
};


interface ComplexFieldProps {
    onChange?: (color: string | null) => void;
    value?: string;
  
}

const ComplexField: React.FC<ComplexFieldProps> = (props) => {
    const [selectedBox, setSelectedBox] = useState<string | null>(null);
    useEffect(() => {
        if (props.value) {
            setSelectedBox(props.value);
        }
    }, []);


    const { onChange } = props;

    const handleBoxClick = (color: string) => {
        setSelectedBox(color);
        if (onChange) {
            onChange(color);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <Box color="red" onClick={() => handleBoxClick('red')} />
            <Box color="blue" onClick={() => handleBoxClick('blue')} />
            <Box color="green" onClick={() => handleBoxClick('green')} />
            <Box color="yellow" onClick={() => handleBoxClick('yellow')} />
            <p>Selected Box: {selectedBox}</p>
        </div>
    );
};

const ComplexFieldDefinition = define(ComplexField, 'Complex Field')
.name('ComplexField')
.category('Custom Fields')
.props({
    

    value: string.valued.default(''),

});

export default ComplexFieldDefinition;