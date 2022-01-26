### 查看下包服务器地址
`npm config get registry`

### 切换下包服务器地址为淘宝镜像服务器
`npm config get registry=https://registry.npmmirror.com/`

### 使用nrm工具管理下包服务器
`npm i nrm -g`
`nrm ls` 展示服务器列表
`nrm use xxx` 更换下包服务器，xxx 为 alias
