import React from "react";
import {Select} from 'antd';

const {Option} = Select;

const Selector = (props) => {
    let langObject = props.state;

    let langArr = [];
    for (let key in langObject) langArr.push({key: key, lang: langObject[key]});

    return (
        <Select defaultValue={langArr[0].key} style={{width: 150}}>
            {langArr.map(elem => {
                return (
                    <Option value={elem.key}>{elem.lang}</Option>
                )
            })}
        </Select>
    );
}

export default Selector;