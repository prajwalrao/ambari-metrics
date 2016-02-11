# AMS (Ambari Metrics Service) Datasource Plugin for Grafana

Use **ambari-metrics** to visualize metrics exposed via AMS in Grafana. 

---

#### This project is now a part of Apache Ambari and the latest version of the plugin can always be found below

https://github.com/apache/ambari/tree/trunk/ambari-metrics/ambari-metrics-grafana

##Project related Apache JIRAs##

[![JIRA issue](https://img.shields.io/jira/issue/https/issues.apache.org/jira/AMBARI-14893.svg)](https://issues.apache.org/jira/browse/AMBARI-14893)

[![JIRA issue](https://img.shields.io/jira/issue/https/issues.apache.org/jira/AMBARI-14985.svg)](https://issues.apache.org/jira/browse/AMBARI-14985)

[![JIRA issue](https://img.shields.io/jira/issue/https/issues.apache.org/jira/AMBARI-14999.svg)](https://issues.apache.org/jira/browse/AMBARI-14999)


<!--
### If you already have Ambari Metrics UI as a part of your AMS Install, [go here](#createdash) to get started


**ToC**
 - [Install Grafana](#installg)
 - [Install Datasource Plugin](#installam)
 - [Access Grafana](#accessgraf)
 - [Add Datasource to Grafana](#addds)
  	- [Test Datasource](#testds)
 - [Create Dashboard](#createdash)
 - [Add a Graph](#addgraph)
 - [Save Dashboard](#savedash)
 - [Time Ranges](#timerange)
 - [Edit Panel/Graph](#editpanel)


----------
![enter image description here](https://raw.githubusercontent.com/prajwalrao/ambari-metrics/master/screenshots/full-dashboard.png)

----------
<a name="installg"></a>
### Install Grafana


You can install Grafana on any host.  It does not need to be co-located with Ambari Metrics Collector.  The only requirement is that it has network access to Ambari Metrics Collector.

**Install on CentOS/Red Hat:**
```
sudo yum install https://grafanarel.s3.amazonaws.com/builds/grafana-2.6.0-1.x86_64.rpm
```

**Install on Ubuntu/Debian:**
```
wget https://grafanarel.s3.amazonaws.com/builds/grafana_2.6.0_amd64.deb
sudo apt-get install -y adduser libfontconfig
sudo dpkg -i grafana_2.6.0_amd64.deb
```

**Install on SUSE/SLES:**
```
sudo rpm -i --nodeps grafana-2.6.0-1.x86_64.rpm
```
<a name="installam"></a> 
### Deploy ambari-metrics 

```
sudo wget https://github.com/prajwalrao/ambari-metrics/raw/master/dist/ambari-metrics.tar.gz
sudo tar zxvf ambari-metrics.tar.gz -C /usr/share/grafana/public/app/plugins/datasource
```

### Start Grafana

```
sudo service grafana-server start
```

<a name="accessgraf"></a> 
### Access Grafana

```
http://GRAFANA_HOST:3000 
```

---

<a name="addds"></a>
## Add Ambari Metrics Datasource in Grafana UI

**Add a Datasource**
>	- Click on "Datasources"
> 	- Click on "Add New" at the top 

![add-datasource](screenshots/1-add-datasource.png)

**Add a Datasource (continued)**

> 	1. Name of your Datasource
>	2. Type = AmbariMetrics
> 	3. Host+Port of your AMS installation. (usually host:6188) 
>  		- No trailing slashes
> 		- Nothing else needs to be changed
>  		- Click on Save.

![datasource-details](screenshots/2-datasource-details.png)


<a name="testds"></a>
**Test your Datasource**

>	To make sure it's all working, click on **Test Connection** and you should see a message that says "Data source is working". 


![test-datasource](screenshots/3-test-datasource.png)

---

<a name="createdash"></a>
## Creating a Dashboard

**To create a dashboard**

>	- Click on Dashboards on the left
>	- Click on "Home"
>	- Click on New at the bottom of the dropdown 

![Dashboard Dropdown](screenshots/4-dashboard-dropdown.png)



**To add a panel to your newly created dashboard**

>	- Click on the green button on the left(see image below)
>	- This will expand a flyout menu that will allow you to add a panel
>	- Choose Graph / Table / Single Stat

![Add Panel](screenshots/5-dashboard-graph-menu.png)

![Types of Panels](screenshots/6-graph-panels.png)


---

<a name="addgraph"></a>
**To add a Graph**


>	- Choose the Datasource you created earlier
>	- Once you've chosen the datasource, you should see the query editor show you some options

![Add a Graph](screenshots/7-choose-datasource.png)



>	- Choose the component you wish to see metrics for

![Add a Graph](screenshots/8-choose-component.png)



>	- Based on the component chosen, you should now see a list of metrics for it

![Add a Graph](screenshots/9-choose-metric.png)



>	- Choose hostname from the list of hosts if you wish to see metrics for a specific host.
>		- if hostname isn't chosen, metrics will be shown on a service component level. 

![Add a Graph](screenshots/10-choose-hostname.png)


> 	- By default the aggregator is avg. You can change it via the dropdown
> 	- You can choose to enable Rate by selecting the checkbox.
> 	- You can specify precision by checking the box and then selecting "days, hours, minutes or seconds"

![Select Options](screenshots/11-choose-agg-rate-precision.png)


**To change the title of the Panel**

>	- Click on the "General" tab
>	- Enter the name to change the title of the panel

![Change Panel Title](screenshots/12-change-panel-title.png)

**To change the Units for your metric**

>	- You can edit the units of your graph by clicking on **Axes & Grid** tab and clicking on "unit" as shown.

![Change Units](screenshots/15-change-units.png)

**To customise your graphs**

> 	- You can customise your graph by clicking on the **Display Styles** tab.
> 	- For ex: you can change the color of a specific metric by choosing a series specific override at the bottom.

![series specific override](screenshots/17-series-specific-override.png)


<a name="savedash"></a>
**To Save the Dashboard**

> 	- Click on the save icon next to the dashboard list dropdown on the top to save your dashboard.

![Save Dashboard](screenshots/13-save-dashboard.png)

<a name="editpanel"></a>
**To Edit a Graph**

> 	- Click on the title of your graph/panel and click on edit.

![Edit Graph](screenshots/19-edit-graph.png)


---
<a name="timerange"></a>
### Time Ranges

**To change the Time Range**

>	- To change the timerange click on the top right of your UI.
>		- This setting affects all your graphs inside the dashboard. If you wish to customise time for a specific graph [look here](#timeshift)
> 	- You can use the quick ranges provided or choose a time range of your choice. You can also choose a refresh duration for your dashboard or leave it at "off" to manually refresh.

![Timerange](screenshots/14-change-timerange.png)

<a name="timeshift"></a>
**To change the time range of one graph only**

>	- Use this in case you wish to change the time range for a specific graph without affecting the other graphs in your dashboard
>		- Click on the **Time Range** tab of your Graph
>		- You can then enter a value in the "Override Relative time" input box
>		- You will be able to confirm that this change has occured by looking at the top right of your graph which will show the override message.
>		- You can choose to hide this message if you wish to do so (by checking the "hide time override info")

![Timerange Override](screenshots/18-override-time.png)


---
-->
