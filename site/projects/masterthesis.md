---
title: "Master's thesis: Estimating traffic flows from cellular network data"
date: 2015-09-14
description: "Master's thesis that I wrote as part of my studies at Linköpings University, Sweden."
tags: ["traffic", "cellular networks", "python", "traffic modelling", "network loading", "cellular network", "call detail records", "geospatial algorithms", "thesis"]
cover: "/projects/masterthesis/nload.png"
---

# Master's thesis: Estimating traffic flows from cellular network data

Master's thesis that I wrote as part of my studies at Linköpings University, Sweden. 

## Abstract
Today, usually mathematical models are used to estimate the traffic flows in a transportation network based on two datasources: travel surveys and link counts from sensors. Both of these datasources are expensive to obtain and therefore limited to a small group of participants for surveys or a small subset of the roads for link count sensors. This thesis investigates the possible use of cellular network data to estimate the flows on the roads, which could be a relatively cheap large-scale datasource. The method presented in this thesis contains a complete method that aims to estimate link flows only based on cellular network data which includes the extraction of trips, the estimation of the travel demand, recovering the routes used by users and a network loading. 

The validation of the method shows that cellular network data helps to recover the original route that a user  used, but the Lazy Voronoi Routing algorithm presented in this thesis is not able to recover the original routes as precise as it would be necessary to get reliably link count estimations only from cellular network data. The combination of cellular network data together with classic datasources like link counts however, could help to improve traffic flow estimations.

## Documents
* Code: [cells2flows](https://github.com/bitsteller/cells2flows) on Github
* Thesis: [pdf](http://nilsbreyer.eu/web/projects/masterthesis/thesis.pdf)
* Presentation (slides): [pdf](http://nilsbreyer.eu/web/projects/masterthesis/presentation.pdf)