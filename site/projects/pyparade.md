---
title: "pyParade"
date: 2015-12-02
description: "PyParade is a lightweight multiprocessing framework for Python that makes it easy to parallel process large-scale datasets efficiently."
tags: ["python", "big data", "framework", "parallel processing"]
cover: "/projects/pyparade/banner.png"
---

# pyParade

PyParade is a lightweight multiprocessing framework for Python that makes it easy to parallel process large-scale datasets efficiently. 

![pyParade Logo](./pyparade/logo.png)

To install pyParade, run:

	pip install pyparade


<br/>

![Automatic parllelization](./pyparade/features/parallelization.png)


Similar to [SPARK](https://spark.apache.org) you define how your data should be procesed on a high level and pyParade does the paralellization automatically for you. With pyParade, you don't need to explicitly delegate the work to multiple threads/processes, but you still benefit from the full CPU power available on your machine.


<br/>

![Flexible](./pyparade/features/flexible.png)

You model how the result is calculated by applying an operation to a dataset. The result is a new dataset that you can apply new opertions on:

	result = dataset.map(f).group_by_key().map(g)
	
<br/>

![Profiling](./pyparade/features/profiling.png)


By default pyParade will display detailled status infomation about the running process on console. It will tell you how much data is already processed and will calculate estimated completion times.

<br/>

![Memory](./pyparade/features/memory.png)

Instead of first loading the complete input data into memory and then processing it, pyParade always only loads small portions of data into memory and waits until it is processed. This is implemented by maintaining a buffer between every processing step, similar to a production chain in a factory.

<br/>

![DB](./pyparade/features/db.png)

In pyParade worker processes that are executing an operation can have a context. When running a map operation for example you can provide a function that returns a *contextmanager* (see Python docs) that is executed for each worker process that is spawned. Using this you can for example start up a database connection when a worker spawns and close it when the worker is stopped. Using that you only maintain exactly one permanent database connection per worker process.

For example

	result = dataset.map(f, context = get_db_connection)
	
will call the map function `f` with a contextmanager that is returned by `get_db_connection()` as an additional argument, that can be used inside the function to access the database.
