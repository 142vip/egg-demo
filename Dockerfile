# 项目docker部署

# 安装node
FROM node:latest
# 标签
LABEL version="Beta1.0"
LABEL description="Egg框架上封装常用方法，便于进行项目初始化"
# 作者
LABEL author="Rong姐姐好可爱"
# 邮箱
LABEL email="2237221210@qq.com"
# 创建项目空间
RUN mkdir -p /web-project/node/egg-demo
# 将当前代码文件复制到工作区域
COPY . /web-project/node/egg-demo
# 进入 vendors
WORKDIR /web-project/node/egg-demo
# 指定npm仓库
RUN npm install --registry https://registry.npm.taobao.org

# 暴露端口
EXPOSE 8848
# 项目启动 
CMD ["npm","run","start"]