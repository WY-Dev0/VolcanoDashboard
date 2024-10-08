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
    instance = new Kubernetes.CoordinationV1Api();
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

  describe('CoordinationV1Api', function() {
    describe('createCoordinationV1NamespacedLease', function() {
      it('should call createCoordinationV1NamespacedLease successfully', function(done) {
        //uncomment below and update the code to test createCoordinationV1NamespacedLease
        //instance.createCoordinationV1NamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCoordinationV1CollectionNamespacedLease', function() {
      it('should call deleteCoordinationV1CollectionNamespacedLease successfully', function(done) {
        //uncomment below and update the code to test deleteCoordinationV1CollectionNamespacedLease
        //instance.deleteCoordinationV1CollectionNamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCoordinationV1NamespacedLease', function() {
      it('should call deleteCoordinationV1NamespacedLease successfully', function(done) {
        //uncomment below and update the code to test deleteCoordinationV1NamespacedLease
        //instance.deleteCoordinationV1NamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCoordinationV1APIResources', function() {
      it('should call getCoordinationV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getCoordinationV1APIResources
        //instance.getCoordinationV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listCoordinationV1LeaseForAllNamespaces', function() {
      it('should call listCoordinationV1LeaseForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listCoordinationV1LeaseForAllNamespaces
        //instance.listCoordinationV1LeaseForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listCoordinationV1NamespacedLease', function() {
      it('should call listCoordinationV1NamespacedLease successfully', function(done) {
        //uncomment below and update the code to test listCoordinationV1NamespacedLease
        //instance.listCoordinationV1NamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchCoordinationV1NamespacedLease', function() {
      it('should call patchCoordinationV1NamespacedLease successfully', function(done) {
        //uncomment below and update the code to test patchCoordinationV1NamespacedLease
        //instance.patchCoordinationV1NamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readCoordinationV1NamespacedLease', function() {
      it('should call readCoordinationV1NamespacedLease successfully', function(done) {
        //uncomment below and update the code to test readCoordinationV1NamespacedLease
        //instance.readCoordinationV1NamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceCoordinationV1NamespacedLease', function() {
      it('should call replaceCoordinationV1NamespacedLease successfully', function(done) {
        //uncomment below and update the code to test replaceCoordinationV1NamespacedLease
        //instance.replaceCoordinationV1NamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchCoordinationV1LeaseListForAllNamespaces', function() {
      it('should call watchCoordinationV1LeaseListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchCoordinationV1LeaseListForAllNamespaces
        //instance.watchCoordinationV1LeaseListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchCoordinationV1NamespacedLease', function() {
      it('should call watchCoordinationV1NamespacedLease successfully', function(done) {
        //uncomment below and update the code to test watchCoordinationV1NamespacedLease
        //instance.watchCoordinationV1NamespacedLease(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchCoordinationV1NamespacedLeaseList', function() {
      it('should call watchCoordinationV1NamespacedLeaseList successfully', function(done) {
        //uncomment below and update the code to test watchCoordinationV1NamespacedLeaseList
        //instance.watchCoordinationV1NamespacedLeaseList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
