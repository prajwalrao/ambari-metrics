AMS Datasource Plugin for  Grafana
----------
Use **ambari-metrics** to visualize metrics exposed via AMS in Grafana. 

*This has been tested with Ambari 2.1.2/2.2.0 + HDP 2.3.*

 - [Install Grafana](#installg)
 - [Install Datasource Plugin](#installam)
 - [Create Dashboard](#createdash)

----------
![enter image description here](screenshots/full-dashboard.png)

----------
<a name="installg"></a>
Install Grafana
---------------

You can install Grafana on any host.  It does not need to be co-located with Ambari Server.  The only requirement is that it has network access to Ambari Server.

Install on CentOS/Red Hat:
```
sudo yum install https://grafanarel.s3.amazonaws.com/builds/grafana-2.6.0-1.x86_64.rpm
```

Install on Ubuntu/Debian:
```
wget https://grafanarel.s3.amazonaws.com/builds/grafana_2.6.0_amd64.deb
sudo apt-get install -y adduser libfontconfig
sudo dpkg -i grafana_2.6.0_amd64.deb
```

Install on SUSE/SLES:
```
sudo rpm -i --nodeps grafana-2.6.0-1.x86_64.rpm
```
<a name="installam"></a> 
Deploy ambari-metrics 
---
```
sudo wget https://github.com/prajwalrao/ambari-metrics/raw/master/dist/ambari-metrics.tar.gz
sudo tar zxvf ambari-metrics.tgz -C /usr/share/grafana/public/app/plugins/datasource
```

Start Grafana
---
```
sudo service grafana-server start
```

----------
<a name="createdash"></a>
Create Ambari Metrics Data Source in Grafana UI 
---
![enter image description here](screenshots/add-dashboard.png)