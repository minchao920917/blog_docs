---
title: Linux安装mysql详解
date: 2019-12-14 23:14:54
tags:
 - linux 
categories:
 - 后端
---

##      Linux安装mysql详解

双十二买的腾讯云服务器，正好项目忙的差不多了，学习一下服务器配置和安装，正好在这个风和日丽的下午，开始了远程服务器的安装

##      下载mysql安装包tar.gz

这一步我就不多说了，官网也能下注意是linux版本的安装包就行


##      rz上传到服务器

什么？rz不知道是什么？

执行

    yum install -y lrzsz
    
就能使用rz命令行，然后选中文件，上传到服务器就可以

##      解压和移动到你想要安装的地方

    [root@localhost /]# tar xzvf mysql-5.7.28-linux-glibc2.12-x86_64.tar
    
    [root@localhost /]# mv mysql-5.7.28-linux-glibc2.12-x86_64
    /usr/local/mysql
    
##      在/usr/local/mysql下创建data目录

    [root@localhost /]# mkdir /usr/local/mysql/data

##      更改mysql目录下所有的目录及文件夹所属的用户组和用户以及权限


    [root@localhost /]# useradd mysql
    
    [root@localhost /]# chown -R mysql:mysql /usr/local/mysql
    
    [root@localhost /]# chmod -R 755 /usr/local/mysql
    
##  编译安装并初始化mysql,务必记住初始化输出日志末尾的密码（数据库管理员临时密码）

     cd /usr/local/mysql/bin
     
     ./mysqld --initialize --user=mysql --datadir=/usr/local/mysql/data --basedir=/usr/local/mysql
     
###     补充说明（报错解决）

    cannot open shared object file: No such file or directory

首先检查该链接库文件有没有安装

    rpm -qa|grep libaio 

运行命令后发现系统中无该链接库文件

    yum install  libaio-devel.x86_64
    
运行数据库的初始化命令
    
    yum -y install numactl
    
    
    
##      编辑配置文件my.cnf，添加配置如下

    vi /etc/my.cnf
    
    [mysqld]
    datadir=/usr/local/mysql/data
    port = 3306
    sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
    symbolic-links=0
    max_connections=400
    innodb_file_per_table=1
    #表名大小写不明感，敏感为
    lower_case_table_names=1
        
        
##      启动mysql服务器

    /usr/local/mysql/support-files/mysql.server start
    
##      添加软连接，并重启mysql服务

    [root@localhost /]#  ln -s /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql 
    [root@localhost /]#  ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql
    [root@localhost /]#  service mysql restart
    
##      登录mysql，修改密码(密码为步骤上面生成的临时密码)

    [root@localhost /]#  mysql -u root -p
    
    mysql>set password for root@localhost = password('yourpass');
    
##      开放远程连接

    mysql>use mysql;
    msyql>update user set user.Host='%' where user.User='root';
    mysql>flush privileges;
    mysql>quit;
    

