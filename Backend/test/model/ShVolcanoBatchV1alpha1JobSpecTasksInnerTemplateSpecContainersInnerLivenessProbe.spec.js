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
    instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
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

  describe('ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe', function() {
    it('should create an instance of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe', function() {
      // uncomment below and update the code to test ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be.a(Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe);
    });

    it('should have the property exec (base name: "exec")', function() {
      // uncomment below and update the code to test the property exec
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property failureThreshold (base name: "failureThreshold")', function() {
      // uncomment below and update the code to test the property failureThreshold
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property grpc (base name: "grpc")', function() {
      // uncomment below and update the code to test the property grpc
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property httpGet (base name: "httpGet")', function() {
      // uncomment below and update the code to test the property httpGet
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property initialDelaySeconds (base name: "initialDelaySeconds")', function() {
      // uncomment below and update the code to test the property initialDelaySeconds
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property periodSeconds (base name: "periodSeconds")', function() {
      // uncomment below and update the code to test the property periodSeconds
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property successThreshold (base name: "successThreshold")', function() {
      // uncomment below and update the code to test the property successThreshold
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property tcpSocket (base name: "tcpSocket")', function() {
      // uncomment below and update the code to test the property tcpSocket
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property terminationGracePeriodSeconds (base name: "terminationGracePeriodSeconds")', function() {
      // uncomment below and update the code to test the property terminationGracePeriodSeconds
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

    it('should have the property timeoutSeconds (base name: "timeoutSeconds")', function() {
      // uncomment below and update the code to test the property timeoutSeconds
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe();
      //expect(instance).to.be();
    });

  });

}));