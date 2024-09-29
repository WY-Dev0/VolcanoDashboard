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
    instance = new Kubernetes.AutoscalingV1Api();
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

  describe('AutoscalingV1Api', function() {
    describe('createAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call createAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test createAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.createAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler', function() {
      it('should call deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler
        //instance.deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call deleteAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test deleteAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.deleteAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAutoscalingV1APIResources', function() {
      it('should call getAutoscalingV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getAutoscalingV1APIResources
        //instance.getAutoscalingV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces', function() {
      it('should call listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces
        //instance.listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call listAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test listAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.listAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call patchAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test patchAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.patchAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus
        //instance.patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call readAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test readAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.readAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus
        //instance.readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call replaceAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test replaceAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.replaceAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus
        //instance.replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces', function() {
      it('should call watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces
        //instance.watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call watchAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test watchAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.watchAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAutoscalingV1NamespacedHorizontalPodAutoscalerList', function() {
      it('should call watchAutoscalingV1NamespacedHorizontalPodAutoscalerList successfully', function(done) {
        //uncomment below and update the code to test watchAutoscalingV1NamespacedHorizontalPodAutoscalerList
        //instance.watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
