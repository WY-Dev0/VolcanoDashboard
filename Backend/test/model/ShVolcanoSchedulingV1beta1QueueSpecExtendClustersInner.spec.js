/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Kubernetes);
  }
}(this, function(expect, Kubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Kubernetes.ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner', function() {
    it('should create an instance of ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner', function() {
      // uncomment below and update the code to test ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner
      //var instance = new Kubernetes.ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner();
      //expect(instance).to.be.a(Kubernetes.ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner);
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instance = new Kubernetes.ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Kubernetes.ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new Kubernetes.ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner();
      //expect(instance).to.be();
    });

  });

}));