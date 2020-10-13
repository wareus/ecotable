import React from 'react'
import {Table, Alert} from 'antd'
import { getItems } from './Items';

export const App = () =>
{
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
            title:'Components',
            dataIndex: 'ingredients',
            key:'ingredients',
            render: ingredients => {
            return ingredients.map(ingredient => <span>{ingredient.number} x {ingredient.name}</span>)
            }
        },
        {
            title:'Info',
            dataIndex: 'info',
            key:'info',
            render: info => <span style={{color:"red"}}>{info}</span>
        }
      ];
      

    return <Table columns={columns} dataSource={getItems()} />
}