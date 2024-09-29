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
    instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
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

  describe('IoK8sApiStorageV1StorageClass', function() {
    it('should create an instance of IoK8sApiStorageV1StorageClass', function() {
      // uncomment below and update the code to test IoK8sApiStorageV1StorageClass
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiStorageV1StorageClass);
    });

    it('should have the property allowVolumeExpansion (base name: "allowVolumeExpansion")', function() {
      // uncomment below and update the code to test the property allowVolumeExpansion
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property allowedTopologies (base name: "allowedTopologies")', function() {
      // uncomment below and update the code to test the property allowedTopologies
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property mountOptions (base name: "mountOptions")', function() {
      // uncomment below and update the code to test the property mountOptions
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property provisioner (base name: "provisioner")', function() {
      // uncomment below and update the code to test the property provisioner
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property reclaimPolicy (base name: "reclaimPolicy")', function() {
      // uncomment below and update the code to test the property reclaimPolicy
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

    it('should have the property volumeBindingMode (base name: "volumeBindingMode")', function() {
      // uncomment below and update the code to test the property volumeBindingMode
      //var instance = new Kubernetes.IoK8sApiStorageV1StorageClass();
      //expect(instance).to.be();
    });

  });

}));