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
    instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
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

  describe('IoK8sApiCoreV1ContainerStateTerminated', function() {
    it('should create an instance of IoK8sApiCoreV1ContainerStateTerminated', function() {
      // uncomment below and update the code to test IoK8sApiCoreV1ContainerStateTerminated
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiCoreV1ContainerStateTerminated);
    });

    it('should have the property containerID (base name: "containerID")', function() {
      // uncomment below and update the code to test the property containerID
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property exitCode (base name: "exitCode")', function() {
      // uncomment below and update the code to test the property exitCode
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property finishedAt (base name: "finishedAt")', function() {
      // uncomment below and update the code to test the property finishedAt
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property signal (base name: "signal")', function() {
      // uncomment below and update the code to test the property signal
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "startedAt")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instance = new Kubernetes.IoK8sApiCoreV1ContainerStateTerminated();
      //expect(instance).to.be();
    });

  });

}));