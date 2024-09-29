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
    instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner();
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

  describe('ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner', function() {
    it('should create an instance of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner', function() {
      // uncomment below and update the code to test ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner();
      //expect(instance).to.be.a(Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner);
    });

    it('should have the property podAffinityTerm (base name: "podAffinityTerm")', function() {
      // uncomment below and update the code to test the property podAffinityTerm
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner();
      //expect(instance).to.be();
    });

  });

}));
