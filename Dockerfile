#
# 功能：项目docker部署
# 注意事项：
#   - 修改端口，与项目实际端口一致
#   - 修改项目主目录，模板文件为egg-demo，仅作示例
#

# 安装node
## 自定义镜像：registry.cn-hangzhou.aliyuncs.com/142vip/node:12.6.0-alpine
FROM node:latest
# 标签
LABEL version="Beta1.0"
LABEL description="基于egg框架实现demo项目模板"
# 作者
MAINTAINER Rong姐姐好可爱 <fairy_vip@2925.com>
# 创建项目空间
RUN mkdir -p /apps
# 将当前代码文件复制到工作区域
COPY . /apps
# 进入 vendors
WORKDIR /apps
# 指定npm仓库，配置cnpm
RUN npm install --registry https://registry.npm.taobao.org
EXPOSE 8848
# 项目启动 
CMD ["npm","run","start"]