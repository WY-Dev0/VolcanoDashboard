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
    instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
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

  describe('IoK8sApiCoreV1ServiceSpec', function() {
    it('should create an instance of IoK8sApiCoreV1ServiceSpec', function() {
      // uncomment below and update the code to test IoK8sApiCoreV1ServiceSpec
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiCoreV1ServiceSpec);
    });

    it('should have the property allocateLoadBalancerNodePorts (base name: "allocateLoadBalancerNodePorts")', function() {
      // uncomment below and update the code to test the property allocateLoadBalancerNodePorts
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property clusterIP (base name: "clusterIP")', function() {
      // uncomment below and update the code to test the property clusterIP
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property clusterIPs (base name: "clusterIPs")', function() {
      // uncomment below and update the code to test the property clusterIPs
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property externalIPs (base name: "externalIPs")', function() {
      // uncomment below and update the code to test the property externalIPs
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property externalName (base name: "externalName")', function() {
      // uncomment below and update the code to test the property externalName
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property externalTrafficPolicy (base name: "externalTrafficPolicy")', function() {
      // uncomment below and update the code to test the property externalTrafficPolicy
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property healthCheckNodePort (base name: "healthCheckNodePort")', function() {
      // uncomment below and update the code to test the property healthCheckNodePort
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property internalTrafficPolicy (base name: "internalTrafficPolicy")', function() {
      // uncomment below and update the code to test the property internalTrafficPolicy
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property ipFamilies (base name: "ipFamilies")', function() {
      // uncomment below and update the code to test the property ipFamilies
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property ipFamilyPolicy (base name: "ipFamilyPolicy")', function() {
      // uncomment below and update the code to test the property ipFamilyPolicy
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property loadBalancerClass (base name: "loadBalancerClass")', function() {
      // uncomment below and update the code to test the property loadBalancerClass
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property loadBalancerIP (base name: "loadBalancerIP")', function() {
      // uncomment below and update the code to test the property loadBalancerIP
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property loadBalancerSourceRanges (base name: "loadBalancerSourceRanges")', function() {
      // uncomment below and update the code to test the property loadBalancerSourceRanges
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property ports (base name: "ports")', function() {
      // uncomment below and update the code to test the property ports
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property publishNotReadyAddresses (base name: "publishNotReadyAddresses")', function() {
      // uncomment below and update the code to test the property publishNotReadyAddresses
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property sessionAffinity (base name: "sessionAffinity")', function() {
      // uncomment below and update the code to test the property sessionAffinity
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property sessionAffinityConfig (base name: "sessionAffinityConfig")', function() {
      // uncomment below and update the code to test the property sessionAffinityConfig
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property trafficDistribution (base name: "trafficDistribution")', function() {
      // uncomment below and update the code to test the property trafficDistribution
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Kubernetes.IoK8sApiCoreV1ServiceSpec();
      //expect(instance).to.be();
    });

  });

}));