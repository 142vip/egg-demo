# 项目docker部署

# 安装node
FROM node:latest
# 标签
LABEL version="Beta1.0"
LABEL description="基于egg框架实现的Oauth2统一认证登录"
# 作者
MAINTAINER Taylor <2237221210@qq.com>
# 创建项目空间
RUN mkdir -p /web-project/node/oauth2-service
# 将当前代码文件复制到工作区域
COPY . /web-project/node/oauth2-service
# 进入 vendors
WORKDIR /web-project/node/oauth2-service
# 指定npm仓库
RUN npm install --registry https://registry.npm.taobao.org
EXPOSE 8848
# 项目启动 
CMD ["npm","run","start"]