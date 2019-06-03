<template>
  <div class="cluster-wrapper">
    <a-table :dataSource="data">
      <a-table-column title="主机名" data-index="name" key="name"/>
      <a-table-column title="状态" data-index="status" key="status"/>
      <a-table-column title="类型" data-index="type" key="type"/>
      <a-table-column title="厂家" data-index="factory" key="factory"/>
      <a-table-column title="CPU" data-index="cpu" key="cpu"/>
      <a-table-column title="服务" data-index="service" key="service">
        <template slot-scope="service">
          <span>
            <a-tag v-for="tag in service" color="blue" :key="tag">{{tag}}</a-tag>
          </span>
        </template>
      </a-table-column>
      <a-table-column title="角色" data-index="role" key="role">
        <template slot-scope="role">
          <span>
            <a-tag v-for="tag in role" color="blue" :key="tag">{{tag}}</a-tag>
          </span>
        </template>
      </a-table-column>
      <a-table-column title="CPU利用率" data-index="cpuUsed" key="cpuUsed">
        <template slot-scope="cpuUsed">
          <a-progress :percent="cpuUsed" size="small" status="active"/>
        </template>
      </a-table-column>
      <a-table-column title="系统盘使用" data-index="systemUsed" key="systemUsed">
        <template slot-scope="systemUsed">
          <a-progress :percent="systemUsed" size="small" status="active"/>
        </template>
      </a-table-column>
      <!-- <a-table-column
      title="Tags"
      dataIndex="tags"
      key="tags"
    >
      <template slot-scope="tags">
        <span>
          <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
        </span>
      </template>
      </a-table-column>-->
      <a-table-column title="Action" key="action">
        <template slot-scope="text, record">
          <span>
            <a href="javascript:;">Action 一 {{record.firstName}}</a>
            <a-divider type="vertical"/>
            <a href="javascript:;">Delete</a>
          </span>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
const data = [
  {
    key: "1",
    name: "John",
    status: "online",
    type: "VirtualBox",
    factory: "innotek GmbH",
    cpu: 2,
    service: ["网关", "监控"],
    role: ["网关", "监控", "存储服务器"],
    cpuUsed: 56,
    systemUsed: 32,
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "John",
    status: "online",
    type: "VirtualBox",
    factory: "innotek GmbH",
    cpu: 2,
    service: ["网关", "监控"],
    role: ["网关", "监控", "存储服务器"],
    cpuUsed: 56,
    systemUsed: 32,
    tags: ["nice", "developer"]
  },
  {
    key: "3",
    name: "John",
    status: "online",
    type: "VirtualBox",
    factory: "innotek GmbH",
    cpu: 2,
    service: ["网关", "监控"],
    role: ["网关", "监控", "存储服务器"],
    cpuUsed: 56,
    systemUsed: 32,
    tags: ["nice", "developer"]
  }
];
export default {
  name: "host",
  data() {
    return {
      data
    };
  }
};
</script>

<style>
</style>
