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
    instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
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

  describe('IoK8sApiAppsV1DeploymentSpec', function() {
    it('should create an instance of IoK8sApiAppsV1DeploymentSpec', function() {
      // uncomment below and update the code to test IoK8sApiAppsV1DeploymentSpec
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiAppsV1DeploymentSpec);
    });

    it('should have the property minReadySeconds (base name: "minReadySeconds")', function() {
      // uncomment below and update the code to test the property minReadySeconds
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property paused (base name: "paused")', function() {
      // uncomment below and update the code to test the property paused
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property progressDeadlineSeconds (base name: "progressDeadlineSeconds")', function() {
      // uncomment below and update the code to test the property progressDeadlineSeconds
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property replicas (base name: "replicas")', function() {
      // uncomment below and update the code to test the property replicas
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property revisionHistoryLimit (base name: "revisionHistoryLimit")', function() {
      // uncomment below and update the code to test the property revisionHistoryLimit
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property strategy (base name: "strategy")', function() {
      // uncomment below and update the code to test the property strategy
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instance = new Kubernetes.IoK8sApiAppsV1DeploymentSpec();
      //expect(instance).to.be();
    });

  });

}));