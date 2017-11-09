/**
 * merge service
 *
 * merge service use webpack-merge provides a merge function that concatenates arrays and merges objects.
 * This behavior is particularly useful in configuring webpack.
 * There's also a webpack specific merge variant known as merge.
 * smart that's able to take webpack specifics into account (i.e., it can flatten loader definitions).
 *
 */

module.exports = require('webpack-merge');