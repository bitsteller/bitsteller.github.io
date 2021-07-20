{
	"author": "Nils Breyer",
	"tags": ["python", "big data", "framework", "parallel processing"],
	"type": "project",
	"start": "2015",
	"end": "2015",
	"cover": "!./pyparade/banner"
}

# pyParade
PyParade is a lightweight multiprocessing framework for Python that makes it easy to parallel process large-scale datasets efficiently. To install pyParade, simply run:

	pip install pyparade

!{}(!./pyparade/logo)

<br/>
<div class="feature">
!{}(!./pyparade/features/parallelization)

Similar to [SPARK](https://spark.apache.org) you define how your data should be procesed on a high level and pyParade does the paralellization automatically for you. With pyParade, you don't need to explicitly delegate the work to multiple threads/processes, but you still benefit from the full CPU power available on your machine.
</div>

<br/>
<div class="feature">
!{}(!./pyparade/features/flexible)

You model how the result is calculated by applying an operation to a dataset. The result is a new dataset that you can apply new opertions on:

	result = dataset.map(f).group_by_key().map(g)
	
 You can even apply different operations to the same dataset to calculate different results at the same time \*.

<small>\* coming soon</small>
</div>

<br/>
<div class="feature">
!{}(!./pyparade/features/profiling)

By default pyParade will display detailled status infomation about the running process on console. It will tell you how much data is already processed and will calculate estimated completion times.
</div>

<br/>
<div class="feature">
!{}(!./pyparade/features/memory)

Instead of first loading the complete input data into memory and then processing it, pyParade always only loads small portions of data into memory and waits until it is processed. This is implemented by maintaining a buffer between every processing step, similar to a production chain in a factory.
</div>

<br/>
<div class="feature">
!{}(!./pyparade/features/db)

In pyParade worker processes that are executing an operation can have a context. When running a map operation for example you can provide a function that returns a *contextmanager* (see Python docs) that is executed for each worker process that is spawned. Using this you can for example start up a database connection when a worker spawns and close it when the worker is stopped. Using that you only maintain exactly one permanent database connection per worker process.

For example

	result = dataset.map(f, context = get_db_connection)
	
will call the map function `f` with a contextmanager that is returned by `get_db_connection()` as an additional argument, that can be used inside the function to access the database.

</div>
