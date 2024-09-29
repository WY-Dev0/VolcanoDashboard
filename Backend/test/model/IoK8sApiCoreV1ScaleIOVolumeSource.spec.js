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
    instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
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

  describe('IoK8sApiCoreV1ScaleIOVolumeSource', function() {
    it('should create an instance of IoK8sApiCoreV1ScaleIOVolumeSource', function() {
      // uncomment below and update the code to test IoK8sApiCoreV1ScaleIOVolumeSource
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource);
    });

    it('should have the property fsType (base name: "fsType")', function() {
      // uncomment below and update the code to test the property fsType
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property gateway (base name: "gateway")', function() {
      // uncomment below and update the code to test the property gateway
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property protectionDomain (base name: "protectionDomain")', function() {
      // uncomment below and update the code to test the property protectionDomain
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property readOnly (base name: "readOnly")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property secretRef (base name: "secretRef")', function() {
      // uncomment below and update the code to test the property secretRef
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property sslEnabled (base name: "sslEnabled")', function() {
      // uncomment below and update the code to test the property sslEnabled
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property storageMode (base name: "storageMode")', function() {
      // uncomment below and update the code to test the property storageMode
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property storagePool (base name: "storagePool")', function() {
      // uncomment below and update the code to test the property storagePool
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "system")', function() {
      // uncomment below and update the code to test the property system
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property volumeName (base name: "volumeName")', function() {
      // uncomment below and update the code to test the property volumeName
      //var instance = new Kubernetes.IoK8sApiCoreV1ScaleIOVolumeSource();
      //expect(instance).to.be();
    });

  });

}));
