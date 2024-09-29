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
    instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
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

  describe('IoK8sApiBatchV1JobStatus', function() {
    it('should create an instance of IoK8sApiBatchV1JobStatus', function() {
      // uncomment below and update the code to test IoK8sApiBatchV1JobStatus
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiBatchV1JobStatus);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property completedIndexes (base name: "completedIndexes")', function() {
      // uncomment below and update the code to test the property completedIndexes
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property completionTime (base name: "completionTime")', function() {
      // uncomment below and update the code to test the property completionTime
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property failed (base name: "failed")', function() {
      // uncomment below and update the code to test the property failed
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property failedIndexes (base name: "failedIndexes")', function() {
      // uncomment below and update the code to test the property failedIndexes
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property ready (base name: "ready")', function() {
      // uncomment below and update the code to test the property ready
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property succeeded (base name: "succeeded")', function() {
      // uncomment below and update the code to test the property succeeded
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property terminating (base name: "terminating")', function() {
      // uncomment below and update the code to test the property terminating
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

    it('should have the property uncountedTerminatedPods (base name: "uncountedTerminatedPods")', function() {
      // uncomment below and update the code to test the property uncountedTerminatedPods
      //var instance = new Kubernetes.IoK8sApiBatchV1JobStatus();
      //expect(instance).to.be();
    });

  });

}));
