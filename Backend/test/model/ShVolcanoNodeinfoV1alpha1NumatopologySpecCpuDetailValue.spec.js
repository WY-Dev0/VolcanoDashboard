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
    instance = new Kubernetes.ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue();
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

  describe('ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue', function() {
    it('should create an instance of ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue', function() {
      // uncomment below and update the code to test ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue
      //var instance = new Kubernetes.ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue();
      //expect(instance).to.be.a(Kubernetes.ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue);
    });

    it('should have the property core (base name: "core")', function() {
      // uncomment below and update the code to test the property core
      //var instance = new Kubernetes.ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue();
      //expect(instance).to.be();
    });

    it('should have the property numa (base name: "numa")', function() {
      // uncomment below and update the code to test the property numa
      //var instance = new Kubernetes.ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue();
      //expect(instance).to.be();
    });

    it('should have the property socket (base name: "socket")', function() {
      // uncomment below and update the code to test the property socket
      //var instance = new Kubernetes.ShVolcanoNodeinfoV1alpha1NumatopologySpecCpuDetailValue();
      //expect(instance).to.be();
    });

  });

}));
