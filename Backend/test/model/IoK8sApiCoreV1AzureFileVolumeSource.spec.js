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
    instance = new Kubernetes.IoK8sApiCoreV1AzureFileVolumeSource();
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

  describe('IoK8sApiCoreV1AzureFileVolumeSource', function() {
    it('should create an instance of IoK8sApiCoreV1AzureFileVolumeSource', function() {
      // uncomment below and update the code to test IoK8sApiCoreV1AzureFileVolumeSource
      //var instance = new Kubernetes.IoK8sApiCoreV1AzureFileVolumeSource();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiCoreV1AzureFileVolumeSource);
    });

    it('should have the property readOnly (base name: "readOnly")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instance = new Kubernetes.IoK8sApiCoreV1AzureFileVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property secretName (base name: "secretName")', function() {
      // uncomment below and update the code to test the property secretName
      //var instance = new Kubernetes.IoK8sApiCoreV1AzureFileVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property shareName (base name: "shareName")', function() {
      // uncomment below and update the code to test the property shareName
      //var instance = new Kubernetes.IoK8sApiCoreV1AzureFileVolumeSource();
      //expect(instance).to.be();
    });

  });

}));
