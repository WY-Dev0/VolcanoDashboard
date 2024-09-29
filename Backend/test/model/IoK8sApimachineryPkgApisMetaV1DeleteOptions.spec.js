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
    instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
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

  describe('IoK8sApimachineryPkgApisMetaV1DeleteOptions', function() {
    it('should create an instance of IoK8sApimachineryPkgApisMetaV1DeleteOptions', function() {
      // uncomment below and update the code to test IoK8sApimachineryPkgApisMetaV1DeleteOptions
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be.a(Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions);
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be();
    });

    it('should have the property dryRun (base name: "dryRun")', function() {
      // uncomment below and update the code to test the property dryRun
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be();
    });

    it('should have the property gracePeriodSeconds (base name: "gracePeriodSeconds")', function() {
      // uncomment below and update the code to test the property gracePeriodSeconds
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be();
    });

    it('should have the property orphanDependents (base name: "orphanDependents")', function() {
      // uncomment below and update the code to test the property orphanDependents
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be();
    });

    it('should have the property preconditions (base name: "preconditions")', function() {
      // uncomment below and update the code to test the property preconditions
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be();
    });

    it('should have the property propagationPolicy (base name: "propagationPolicy")', function() {
      // uncomment below and update the code to test the property propagationPolicy
      //var instance = new Kubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions();
      //expect(instance).to.be();
    });

  });

}));
