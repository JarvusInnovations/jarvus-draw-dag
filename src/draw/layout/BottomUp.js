/*global Ext,dagfn*/
/* dagfn = Jarvus.draw.layout.DagLayout */
/*
Copyright 2012 Leo Forner, Karl Forner

The JavaScript code in this page is dual licensed under the terms of the GPLv3 license or later
and the Sencha Model Extension License.
The Sencha licenses allows this component to be used with both the GPL and Commercial extjs framework licenses.
*/
Ext.define('Jarvus.draw.layout.BottomUp', {

    alias: 'daglayout.bottomup',

    requires: [
        'Jarvus.draw.layout.DagLayout'
    ],

    fn: function(dag) {
        var layers = dagfn.longestPathLayering(dag),
            dagAndLayers = dagfn.addDummyNodes(dag, layers), // add dummy nodes and corresponding edges
            res;

        res = dagfn.orderLayersUsing2waysSweep(dagAndLayers.dag, dagAndLayers.layers, dagfn.two_layer_adjacent_exchange);

        return {dag:dagAndLayers.dag, layers:res.layers };
    }
});
