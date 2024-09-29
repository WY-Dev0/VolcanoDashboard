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
    instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
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

  describe('IoK8sApiBatchV1CronJobSpec', function() {
    it('should create an instance of IoK8sApiBatchV1CronJobSpec', function() {
      // uncomment below and update the code to test IoK8sApiBatchV1CronJobSpec
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiBatchV1CronJobSpec);
    });

    it('should have the property concurrencyPolicy (base name: "concurrencyPolicy")', function() {
      // uncomment below and update the code to test the property concurrencyPolicy
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property failedJobsHistoryLimit (base name: "failedJobsHistoryLimit")', function() {
      // uncomment below and update the code to test the property failedJobsHistoryLimit
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property jobTemplate (base name: "jobTemplate")', function() {
      // uncomment below and update the code to test the property jobTemplate
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property startingDeadlineSeconds (base name: "startingDeadlineSeconds")', function() {
      // uncomment below and update the code to test the property startingDeadlineSeconds
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property successfulJobsHistoryLimit (base name: "successfulJobsHistoryLimit")', function() {
      // uncomment below and update the code to test the property successfulJobsHistoryLimit
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property suspend (base name: "suspend")', function() {
      // uncomment below and update the code to test the property suspend
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new Kubernetes.IoK8sApiBatchV1CronJobSpec();
      //expect(instance).to.be();
    });

  });

}));
