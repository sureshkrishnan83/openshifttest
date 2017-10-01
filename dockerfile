FROM openshift/nodejs-010-centos7

MAINTAINER Suresh krishnan "sureshkrishnan83@gmail.com"

EXPOSE 8000

COPY . /opt/app-root/src

CMD /bin/bash -c 'node hello-http.js'
