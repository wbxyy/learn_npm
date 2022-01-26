### dependencies 节点和 devDependencies 节点

#### 核心依赖包

如果包在开发部署期间都需要用到，则记录到 dependencies 节点
普通的安装命令：`npm i 包名` 会把包记录到 dependencies 节点 


#### 开发依赖包

如果包在项目开发时需要用到，在项目上线时再也不需要使用，则记录到 devDependencies 节点
`npm i 包名 -D`
它是 `npm install 包名 --save-dev` 的简写形式

- `-D` 参数既可以加在包名前面，也可以加在包名后面
- 如何确定一个包需不需要添加 `-D` 参数，应该去 npm 官网查看安装教程