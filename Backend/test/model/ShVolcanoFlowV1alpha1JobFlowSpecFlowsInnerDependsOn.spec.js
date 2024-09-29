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
    instance = new Kubernetes.ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn();
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

  describe('ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn', function() {
    it('should create an instance of ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn', function() {
      // uncomment below and update the code to test ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn
      //var instance = new Kubernetes.ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn();
      //expect(instance).to.be.a(Kubernetes.ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn);
    });

    it('should have the property probe (base name: "probe")', function() {
      // uncomment below and update the code to test the property probe
      //var instance = new Kubernetes.ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn();
      //expect(instance).to.be();
    });

    it('should have the property targets (base name: "targets")', function() {
      // uncomment below and update the code to test the property targets
      //var instance = new Kubernetes.ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn();
      //expect(instance).to.be();
    });

  });

}));
