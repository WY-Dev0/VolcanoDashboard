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
    instance = new Kubernetes.IoK8sApiFlowcontrolV1PolicyRulesWithSubjects();
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

  describe('IoK8sApiFlowcontrolV1PolicyRulesWithSubjects', function() {
    it('should create an instance of IoK8sApiFlowcontrolV1PolicyRulesWithSubjects', function() {
      // uncomment below and update the code to test IoK8sApiFlowcontrolV1PolicyRulesWithSubjects
      //var instance = new Kubernetes.IoK8sApiFlowcontrolV1PolicyRulesWithSubjects();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiFlowcontrolV1PolicyRulesWithSubjects);
    });

    it('should have the property nonResourceRules (base name: "nonResourceRules")', function() {
      // uncomment below and update the code to test the property nonResourceRules
      //var instance = new Kubernetes.IoK8sApiFlowcontrolV1PolicyRulesWithSubjects();
      //expect(instance).to.be();
    });

    it('should have the property resourceRules (base name: "resourceRules")', function() {
      // uncomment below and update the code to test the property resourceRules
      //var instance = new Kubernetes.IoK8sApiFlowcontrolV1PolicyRulesWithSubjects();
      //expect(instance).to.be();
    });

    it('should have the property subjects (base name: "subjects")', function() {
      // uncomment below and update the code to test the property subjects
      //var instance = new Kubernetes.IoK8sApiFlowcontrolV1PolicyRulesWithSubjects();
      //expect(instance).to.be();
    });

  });

}));