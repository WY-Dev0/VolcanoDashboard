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
    instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
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

  describe('IoK8sApiCoreV1PodStatus', function() {
    it('should create an instance of IoK8sApiCoreV1PodStatus', function() {
      // uncomment below and update the code to test IoK8sApiCoreV1PodStatus
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiCoreV1PodStatus);
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property containerStatuses (base name: "containerStatuses")', function() {
      // uncomment below and update the code to test the property containerStatuses
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property ephemeralContainerStatuses (base name: "ephemeralContainerStatuses")', function() {
      // uncomment below and update the code to test the property ephemeralContainerStatuses
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property hostIP (base name: "hostIP")', function() {
      // uncomment below and update the code to test the property hostIP
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property hostIPs (base name: "hostIPs")', function() {
      // uncomment below and update the code to test the property hostIPs
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property initContainerStatuses (base name: "initContainerStatuses")', function() {
      // uncomment below and update the code to test the property initContainerStatuses
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property nominatedNodeName (base name: "nominatedNodeName")', function() {
      // uncomment below and update the code to test the property nominatedNodeName
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property phase (base name: "phase")', function() {
      // uncomment below and update the code to test the property phase
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podIP (base name: "podIP")', function() {
      // uncomment below and update the code to test the property podIP
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podIPs (base name: "podIPs")', function() {
      // uncomment below and update the code to test the property podIPs
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property qosClass (base name: "qosClass")', function() {
      // uncomment below and update the code to test the property qosClass
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property resize (base name: "resize")', function() {
      // uncomment below and update the code to test the property resize
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property resourceClaimStatuses (base name: "resourceClaimStatuses")', function() {
      // uncomment below and update the code to test the property resourceClaimStatuses
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new Kubernetes.IoK8sApiCoreV1PodStatus();
      //expect(instance).to.be();
    });

  });

}));
