import React from "react";
import {Select} from 'antd';
import {useSelector} from "react-redux";

const {Option} = Select;

const Selector = () => {
    const langObject = useSelector(state => state.languages);

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