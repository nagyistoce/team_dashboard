// This file is autogenerated by graphite.rake
// Do not manually change it.
(function(helpers) {
  helpers.GRAPHITE_FUNCTIONS = [{"name":"alias","description":"Takes one metric or a wildcard seriesList and a string in quotes.\nPrints the string instead of the metric name in the legend.","example":"&target=alias(Sales.widgets.largeBlue,\"Large Blue Widgets\")\n"},{"name":"aliasByNode","description":"Takes a seriesList and applies an alias derived from one or more \u201cnode\u201d\nportion/s of the target name. Node indices are 0 indexed.","example":"&target=aliasByNode(ganglia.*.cpu.load5,1)\n"},{"name":"aliasSub","description":"Runs series names through a regex search/replace.","example":"&target=aliasSub(ip.*TCP*,\"^.*TCP(\\d+)\",\"\\1\")\n"},{"name":"alpha","description":"Assigns the given alpha transparency setting to the series. Takes a float value between 0 and 1.","example":""},{"name":"areaBetween","description":"Draws the area in between the two series in seriesList","example":""},{"name":"asPercent","description":"Calculates a percentage of the total of a wildcard series. If total is specified,\neach series will be calculated as a percentage of that total. If total is not specified,\nthe sum of all points in the wildcard series will be used instead.","example":"&target=asPercent(Server01.connections.{failed,succeeded}, Server01.connections.attempted)\n&target=asPercent(apache01.threads.busy,1500)\n&target=asPercent(Server01.cpu.*.jiffies)\n"},{"name":"averageAbove","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the metrics with an average value\nabove N for the time period specified.","example":"&target=averageAbove(server*.instance*.threads.busy,25)\n"},{"name":"averageBelow","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the metrics with an average value\nbelow N for the time period specified.","example":"&target=averageBelow(server*.instance*.threads.busy,25)\n"},{"name":"averageSeries","description":"Short Alias: avg()","example":"&target=averageSeries(company.server.*.threads.busy)\n"},{"name":"averageSeriesWithWildcards","description":"Call averageSeries after inserting wildcards at the given position(s).","example":"&target=averageSeriesWithWildcards(host.cpu-[0-7].cpu-{user,system}.value, 1)\n"},{"name":"cactiStyle","description":"Takes a series list and modifies the aliases to provide column aligned\noutput with Current, Max, and Min values in the style of cacti.\nNOTE: column alignment only works with monospace fonts such as terminus.","example":"&target=cactiStyle(ganglia.*.net.bytes_out)\n"},{"name":"color","description":"Assigns the given color to the seriesList","example":"&target=color(collectd.hostname.cpu.0.user, 'green')\n&target=color(collectd.hostname.cpu.0.system, 'ff0000')\n&target=color(collectd.hostname.cpu.0.idle, 'gray')\n&target=color(collectd.hostname.cpu.0.idle, '6464ffaa')\n"},{"name":"constantLine","description":"Takes a float F.","example":"&target=constantLine(123.456)\n"},{"name":"cumulative","description":"Takes one metric or a wildcard seriesList.","example":"&target=cumulative(Sales.widgets.largeBlue)\n"},{"name":"currentAbove","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the  metrics whose value is above N\nat the end of the time period specified.","example":"&target=highestAbove(server*.instance*.threads.busy,50)\n"},{"name":"currentBelow","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the  metrics whose value is below N\nat the end of the time period specified.","example":"&target=currentBelow(server*.instance*.threads.busy,3)\n"},{"name":"dashed","description":"Takes one metric or a wildcard seriesList, followed by a float F.","example":"&target=dashed(server01.instance01.memory.free,2.5)\n"},{"name":"derivative","description":"This is the opposite of the integral function.  This is useful for taking a\nrunning total metric and showing how many requests per minute were handled.","example":"&target=derivative(company.server.application01.ifconfig.TXPackets)\n"},{"name":"diffSeries","description":"Can take two or more metrics, or a single metric and a constant.\nSubtracts parameters 2 through n from parameter 1.","example":"&target=diffSeries(service.connections.total,service.connections.failed)\n&target=diffSeries(service.connections.total,5)\n"},{"name":"divideSeries","description":"Takes a dividend metric and a divisor metric and draws the division result.\nA constant may not be passed. To divide by a constant, use the scale()\nfunction (which is essentially a multiplication operation) and use the inverse\nof the dividend. (Division by 8 = multiplication by 1/8 or 0.125)","example":"&target=divideSeries(Series.dividends,Series.divisors)\n"},{"name":"drawAsInfinite","description":"Takes one metric or a wildcard seriesList.\nIf the value is zero, draw the line at 0.  If the value is above zero, draw\nthe line at infinity. If the value is null or less than zero, do not draw\nthe line.","example":"drawAsInfinite(Testing.script.exitCode)\n"},{"name":"events","description":"Returns the number of events at this point in time. Usable with\ndrawAsInfinite.","example":"&target=events(\"tag-one\", \"tag-two\")\n&target=events(\"*\")\n"},{"name":"exclude","description":"Takes a metric or a wildcard seriesList, followed by a regular expression\nin double quotes.  Excludes metrics that match the regular expression.","example":"&target=exclude(servers*.instance*.threads.busy,\"server02\")\n"},{"name":"groupByNode","description":"Takes a serieslist and maps a callback to subgroups within as defined by a common node","example":"&target=groupByNode(ganglia.by-function.*.*.cpu.load5,2,\"sumSeries\")\n\nWould return multiple series which are each the result of applying the \"sumSeries\" function\nto groups joined on the second node (0 indexed) resulting in a list of targets like\nsumSeries(ganglia.by-function.server1.*.cpu.load5),sumSeries(ganglia.by-function.server2.*.cpu.load5),...\n"},{"name":"highestAverage","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the top N metrics with the highest\naverage value for the time period specified.","example":"&target=highestAverage(server*.instance*.threads.busy,5)\n"},{"name":"highestCurrent","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the N metrics with the highest value\nat the end of the time period specified.","example":"&target=highestCurrent(server*.instance*.threads.busy,5)\n"},{"name":"highestMax","description":"Takes one metric or a wildcard seriesList followed by an integer N.","example":"&target=highestCurrent(server*.instance*.threads.busy,5)\n"},{"name":"hitcount","description":"Estimate hit counts from a list of time series.","example":""},{"name":"holtWintersAberration","description":"Performs a Holt-Winters forecast using the series as input data and plots the\npositive or negative deviation of the series data from the forecast.","example":""},{"name":"holtWintersConfidenceBands","description":"Performs a Holt-Winters forecast using the series as input data and plots\nupper and lower bands with the predicted forecast deviations.","example":""},{"name":"holtWintersForecast","description":"Performs a Holt-Winters forecast using the series as input data. Data from\none week previous to the series is used to bootstrap the initial forecast.","example":""},{"name":"integral","description":"This will show the sum over time, sort of like a continuous addition function.\nUseful for finding totals or trends in metrics that are collected per minute.","example":"&target=integral(company.sales.perMinute)\n"},{"name":"keepLastValue","description":"Takes one metric or a wildcard seriesList.\nContinues the line with the last received value when gaps (\u2018None\u2019 values) appear in your data, rather than breaking your line.","example":"&target=keepLastValue(Server01.connections.handled)\n"},{"name":"legendValue","description":"Takes one metric or a wildcard seriesList and a string in quotes.\nAppends a value to the metric name in the legend.  Currently one of: last, avg,\ntotal, min, max.","example":"\n"},{"name":"limit","description":"Takes one metric or a wildcard seriesList followed by an integer N.","example":"&target=limit(server*.instance*.memory.free,5)\n"},{"name":"lineWidth","description":"Takes one metric or a wildcard seriesList, followed by a float F.","example":"&target=lineWidth(server01.instance01.memory.free,5)\n"},{"name":"logarithm","description":"Takes one metric or a wildcard seriesList, a base, and draws the y-axis in logarithmic\nformat.  If base is omitted, the function defaults to base 10.","example":"&target=log(carbon.agents.hostname.avgUpdateTime,2)\n"},{"name":"lowestAverage","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the bottom N metrics with the lowest\naverage value for the time period specified.","example":"&target=lowestAverage(server*.instance*.threads.busy,5)\n"},{"name":"lowestCurrent","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nOut of all metrics passed, draws only the N metrics with the lowest value at\nthe end of the time period specified.","example":"&target=lowestCurrent(server*.instance*.threads.busy,5)\n"},{"name":"maxSeries","description":"Takes one metric or a wildcard seriesList.\nFor each datapoint from each metric passed in, pick the maximum value and graph it.","example":"&target=maxSeries(Server*.connections.total)\n"},{"name":"maximumAbove","description":"Takes one metric or a wildcard seriesList followed by a constant n.\nDraws only the metrics with a maximum value above n.","example":"&target=maximumAbove(system.interface.eth*.packetsSent,1000)\n"},{"name":"maximumBelow","description":"Takes one metric or a wildcard seriesList followed by a constant n.\nDraws only the metrics with a maximum value below n.","example":"&target=maximumBelow(system.interface.eth*.packetsSent,1000)\n"},{"name":"minSeries","description":"Takes one metric or a wildcard seriesList.\nFor each datapoint from each metric passed in, pick the minimum value and graph it.","example":"&target=minSeries(Server*.connections.total)\n"},{"name":"minimumAbove","description":"Takes one metric or a wildcard seriesList followed by a constant n.\nDraws only the metrics with a minimum value above n.","example":"&target=minimumAbove(system.interface.eth*.packetsSent,1000)\n"},{"name":"mostDeviant","description":"Takes an integer N followed by one metric or a wildcard seriesList.\nDraws the N most deviant metrics.\nTo find the deviant, the average across all metrics passed is determined,\nand then the average of each metric is compared to the overall average.","example":"&target=mostDeviant(5, server*.instance*.memory.free)\n"},{"name":"movingAverage","description":"Takes one metric or a wildcard seriesList followed by a number N of datapoints and graphs\nthe average of N previous datapoints.  N-1 datapoints are set to None at the\nbeginning of the graph.","example":"&target=movingAverage(Server.instance01.threads.busy,10)\n"},{"name":"movingMedian","description":"Takes one metric or a wildcard seriesList followed by a number N of datapoints and graphs\nthe median of N previous datapoints.  N-1 datapoints are set to None at the\nbeginning of the graph.","example":"&target=movingMedian(Server.instance01.threads.busy,10)\n"},{"name":"multiplySeries","description":"Takes two or more series and multiplies their points. A constant may not be\nused. To multiply by a constant, use the scale() function.","example":"&target=multiplySeries(Series.dividends,Series.divisors)\n"},{"name":"nPercentile","description":"Returns n-percent of each series in the seriesList.","example":""},{"name":"nonNegativeDerivative","description":"Same as the derivative function above, but ignores datapoints that trend\ndown.  Useful for counters that increase for a long time, then wrap or\nreset. (Such as if a network interface is destroyed and recreated by unloading\nand re-loading a kernel module, common with USB / WiFi cards.","example":"&target=derivative(company.server.application01.ifconfig.TXPackets)\n"},{"name":"offset","description":"Takes one metric or a wildcard seriesList followed by a constant, and adds the constant to\neach datapoint.","example":"&target=offset(Server.instance01.threads.busy,10)\n"},{"name":"randomWalkFunction","description":"Short Alias: randomWalk()","example":"&target=randomWalk(\"The.time.series\")\n"},{"name":"rangeOfSeries","description":"Takes a wildcard seriesList.\nDistills down a set of inputs into the range of the series","example":"&target=rangeOfSeries(Server*.connections.total)\n"},{"name":"removeAbovePercentile","description":"Removes data above the nth percentile from the series or list of series provided.\nValues below this percentile are assigned a value of None.","example":""},{"name":"removeAboveValue","description":"Removes data above the given threshold from the series or list of series provided.\nValues below this threshole are assigned a value of None","example":""},{"name":"removeBelowPercentile","description":"Removes data above the nth percentile from the series or list of series provided.\nValues below this percentile are assigned a value of None.","example":""},{"name":"removeBelowValue","description":"Removes data above the given threshold from the series or list of series provided.\nValues below this threshole are assigned a value of None","example":""},{"name":"scale","description":"Takes one metric or a wildcard seriesList followed by a constant, and multiplies the datapoint\nby the constant provided at each point.","example":"&target=scale(Server.instance01.threads.busy,10)\n&target=scale(Server.instance*.threads.busy,10)\n"},{"name":"secondYAxis","description":"Graph the series on the secondary Y axis.","example":""},{"name":"sinFunction","description":"Short Alias: sin()","example":"&target=sin(\"The.time.series\", 2)\n"},{"name":"smartSummarize","description":"Smarter experimental version of summarize.","example":""},{"name":"sortByMaxima","description":"Takes one metric or a wildcard seriesList.","example":"&target=sortByMaxima(server*.instance*.memory.free)\n"},{"name":"sortByMinima","description":"Takes one metric or a wildcard seriesList.","example":"&target=sortByMinima(server*.instance*.memory.free)\n"},{"name":"stacked","description":"Takes one metric or a wildcard seriesList and change them so they are\nstacked. This is a way of stacking just a couple of metrics without having\nto use the stacked area mode (that stacks everything). By means of this a mixed\nstacked and non stacked graph can be made","example":"&target=stacked(company.server.application01.ifconfig.TXPackets)\n"},{"name":"stdev","description":"Takes one metric or a wildcard seriesList followed by an integer N.\nDraw the Standard Deviation of all metrics passed for the past N datapoints.\nIf the ratio of null points in the window is greater than windowTolerance,\nskip the calculation. The default for windowTolerance is 0.1 (up to 10% of points\nin the window can be missing). Note that if this is set to 0.0, it will cause large\ngaps in the output anywhere a single point is missing.","example":"&target=stdev(server*.instance*.threads.busy,30)\n&target=stdev(server*.instance*.cpu.system,30,0.0)\n"},{"name":"substr","description":"Takes one metric or a wildcard seriesList followed by 1 or 2 integers.  Assume that the\nmetric name is a list or array, with each element separated by dots.  Prints\nn - length elements of the array (if only one integer n is passed) or n - m\nelements of the array (if two integers n and m are passed).  The list starts\nwith element 0 and ends with element (length - 1).","example":"&target=substr(carbon.agents.hostname.avgUpdateTime,2,4)\n"},{"name":"sumSeries","description":"Short form: sum()","example":"&target=sum(company.server.application*.requestsHandled)\n"},{"name":"sumSeriesWithWildcards","description":"Call sumSeries after inserting wildcards at the given position(s).","example":"&target=sumSeriesWithWildcards(host.cpu-[0-7].cpu-{user,system}.value, 1)\n"},{"name":"summarize","description":"Summarize the data into interval buckets of a certain size.","example":"&target=summarize(counter.errors, \"1hour\") # total errors per hour\n&target=summarize(nonNegativeDerivative(gauge.num_users), \"1week\") # new users per week\n&target=summarize(queue.size, \"1hour\", \"avg\") # average queue size per hour\n&target=summarize(queue.size, \"1hour\", \"max\") # maximum queue size during each hour\n&target=summarize(metric, \"13week\", \"avg\", true)&from=midnight+20100101 # 2010 Q1-4\n"},{"name":"threshold","description":"Takes a float F, followed by a label (in double quotes) and a color.\n(See URL API for valid color names & formats.)","example":"&target=threshold(123.456, \"omgwtfbbq\", red)\n"},{"name":"timeFunction","description":"Short Alias: time()","example":"&target=time(\"The.time.series\")\n"},{"name":"timeShift","description":"Takes one metric or a wildcard seriesList, followed by a length of time,\nsurrounded by double quotes. (See the URL API for examples of time formats.)","example":"&target=timeShift(Sales.widgets.largeBlue,\"7d\")\n"}];
})(app.helpers);