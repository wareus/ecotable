import React from 'react'
import {Table, Tag, Space} from 'antd'
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
      ];
      

    return <Table columns={columns} dataSource={getItems()} />
}