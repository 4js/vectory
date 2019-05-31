<template>
  <div class="cluster-wrapper">
    <a-table :dataSource="data">
    <a-table-column
      title="Name"
      dataIndex="Name"
      key="Name"
    />
    <a-table-column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <a-table-column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <a-table-column
      title="Tags"
      dataIndex="tags"
      key="tags"
    >
      <template slot-scope="tags">
        <span>
          <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
        </span>
      </template>
    </a-table-column>
    <a-table-column
      title="Action"
      key="action"
    >
      <template slot-scope="text, record">
        <span>
          <a href="javascript:;">Action 一 {{record.firstName}}</a>
          <a-divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      </template>
    </a-table-column>
  </a-table>
  </div>
</template>

<script>
const data = [{
  key: '1',
  Name: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  Name: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  Name: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
export default {
  name: 'host',
  data () {
      return {
          data
      }
  }
}
</script>

<style>
</style>
