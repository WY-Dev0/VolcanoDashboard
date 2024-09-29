### 1. 后端架构

- 使用 Node.js 和 Express.js 构建后端服务器，监听特定端口
- 利用 OpenAPI Generator 将 Kubernetes (k8s) 的 API 规范生成基于 JavaScript 的 API 客户端代码
- 实现本地与部署了Volcano的K8s集群间的无缝通信  
- 提供 RESTful API 接口，支持获取 Job、Queue、Node 等资源信息

### 2. 前端技术栈

- 采用 React.js 框架构建单页应用（SPA）
- 使用 Material-UI 组件库设计现代化、响应式的用户界面
- 通过 React Router 实现动态渲染和前端路由管理

### 3. 数据流和交互

- 前端通过 API 按需向后端发送请求，获取最新的集群资源数据
- 后端从本地 Kubernetes 集群获取 Volcano 相关资源信息，并返回给前端
- 前端接收数据后，动态更新 UI，无需整页刷新

### 4. 用户界面布局

- 采用左右两栏设计：
  - 左侧为导航栏
  - 右侧为内容展示区
- 左侧导航栏包含四个主要功能选项：
  1. Dashboard
  2. Queue
  3. Job
  4. Node
- 右侧内容区根据用户选择动态显示相应资源信息

### 5. 主要功能模块

| 模块 | 功能描述 |
|------|----------|
| Dashboard | 提供集群资源总览 |
| Queue | 展示和管理 Volcano 队列资源 |
| Job | 显示所有 Volcano 作业及其状态（如 Running、Failed、Pending、Completed 等） |
| Node | 展示集群节点信息和资源使用情况 |






