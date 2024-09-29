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
    instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
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

  describe('IoK8sApiCoreV1PersistentVolumeClaimSpec', function() {
    it('should create an instance of IoK8sApiCoreV1PersistentVolumeClaimSpec', function() {
      // uncomment below and update the code to test IoK8sApiCoreV1PersistentVolumeClaimSpec
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec);
    });

    it('should have the property accessModes (base name: "accessModes")', function() {
      // uncomment below and update the code to test the property accessModes
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property dataSource (base name: "dataSource")', function() {
      // uncomment below and update the code to test the property dataSource
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property dataSourceRef (base name: "dataSourceRef")', function() {
      // uncomment below and update the code to test the property dataSourceRef
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property storageClassName (base name: "storageClassName")', function() {
      // uncomment below and update the code to test the property storageClassName
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumeAttributesClassName (base name: "volumeAttributesClassName")', function() {
      // uncomment below and update the code to test the property volumeAttributesClassName
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumeMode (base name: "volumeMode")', function() {
      // uncomment below and update the code to test the property volumeMode
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumeName (base name: "volumeName")', function() {
      // uncomment below and update the code to test the property volumeName
      //var instance = new Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimSpec();
      //expect(instance).to.be();
    });

  });

}));
