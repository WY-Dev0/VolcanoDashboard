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
    instance = new Kubernetes.FlowVolcanoShV1alpha1Api();
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

  describe('FlowVolcanoShV1alpha1Api', function() {
    describe('createFlowVolcanoShV1alpha1NamespacedJobFlow', function() {
      it('should call createFlowVolcanoShV1alpha1NamespacedJobFlow successfully', function(done) {
        //uncomment below and update the code to test createFlowVolcanoShV1alpha1NamespacedJobFlow
        //instance.createFlowVolcanoShV1alpha1NamespacedJobFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFlowVolcanoShV1alpha1NamespacedJobTemplate', function() {
      it('should call createFlowVolcanoShV1alpha1NamespacedJobTemplate successfully', function(done) {
        //uncomment below and update the code to test createFlowVolcanoShV1alpha1NamespacedJobTemplate
        //instance.createFlowVolcanoShV1alpha1NamespacedJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowVolcanoShV1alpha1CollectionNamespacedJobFlow', function() {
      it('should call deleteFlowVolcanoShV1alpha1CollectionNamespacedJobFlow successfully', function(done) {
        //uncomment below and update the code to test deleteFlowVolcanoShV1alpha1CollectionNamespacedJobFlow
        //instance.deleteFlowVolcanoShV1alpha1CollectionNamespacedJobFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowVolcanoShV1alpha1CollectionNamespacedJobTemplate', function() {
      it('should call deleteFlowVolcanoShV1alpha1CollectionNamespacedJobTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteFlowVolcanoShV1alpha1CollectionNamespacedJobTemplate
        //instance.deleteFlowVolcanoShV1alpha1CollectionNamespacedJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowVolcanoShV1alpha1NamespacedJobFlow', function() {
      it('should call deleteFlowVolcanoShV1alpha1NamespacedJobFlow successfully', function(done) {
        //uncomment below and update the code to test deleteFlowVolcanoShV1alpha1NamespacedJobFlow
        //instance.deleteFlowVolcanoShV1alpha1NamespacedJobFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowVolcanoShV1alpha1NamespacedJobTemplate', function() {
      it('should call deleteFlowVolcanoShV1alpha1NamespacedJobTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteFlowVolcanoShV1alpha1NamespacedJobTemplate
        //instance.deleteFlowVolcanoShV1alpha1NamespacedJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFlowVolcanoShV1alpha1JobFlowForAllNamespaces', function() {
      it('should call listFlowVolcanoShV1alpha1JobFlowForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listFlowVolcanoShV1alpha1JobFlowForAllNamespaces
        //instance.listFlowVolcanoShV1alpha1JobFlowForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFlowVolcanoShV1alpha1JobTemplateForAllNamespaces', function() {
      it('should call listFlowVolcanoShV1alpha1JobTemplateForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listFlowVolcanoShV1alpha1JobTemplateForAllNamespaces
        //instance.listFlowVolcanoShV1alpha1JobTemplateForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFlowVolcanoShV1alpha1NamespacedJobFlow', function() {
      it('should call listFlowVolcanoShV1alpha1NamespacedJobFlow successfully', function(done) {
        //uncomment below and update the code to test listFlowVolcanoShV1alpha1NamespacedJobFlow
        //instance.listFlowVolcanoShV1alpha1NamespacedJobFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFlowVolcanoShV1alpha1NamespacedJobTemplate', function() {
      it('should call listFlowVolcanoShV1alpha1NamespacedJobTemplate successfully', function(done) {
        //uncomment below and update the code to test listFlowVolcanoShV1alpha1NamespacedJobTemplate
        //instance.listFlowVolcanoShV1alpha1NamespacedJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowVolcanoShV1alpha1NamespacedJobFlow', function() {
      it('should call patchFlowVolcanoShV1alpha1NamespacedJobFlow successfully', function(done) {
        //uncomment below and update the code to test patchFlowVolcanoShV1alpha1NamespacedJobFlow
        //instance.patchFlowVolcanoShV1alpha1NamespacedJobFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowVolcanoShV1alpha1NamespacedJobFlowStatus', function() {
      it('should call patchFlowVolcanoShV1alpha1NamespacedJobFlowStatus successfully', function(done) {
        //uncomment below and update the code to test patchFlowVolcanoShV1alpha1NamespacedJobFlowStatus
        //instance.patchFlowVolcanoShV1alpha1NamespacedJobFlowStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowVolcanoShV1alpha1NamespacedJobTemplate', function() {
      it('should call patchFlowVolcanoShV1alpha1NamespacedJobTemplate successfully', function(done) {
        //uncomment below and update the code to test patchFlowVolcanoShV1alpha1NamespacedJobTemplate
        //instance.patchFlowVolcanoShV1alpha1NamespacedJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowVolcanoShV1alpha1NamespacedJobTemplateStatus', function() {
      it('should call patchFlowVolcanoShV1alpha1NamespacedJobTemplateStatus successfully', function(done) {
        //uncomment below and update the code to test patchFlowVolcanoShV1alpha1NamespacedJobTemplateStatus
        //instance.patchFlowVolcanoShV1alpha1NamespacedJobTemplateStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowVolcanoShV1alpha1NamespacedJobFlow', function() {
      it('should call readFlowVolcanoShV1alpha1NamespacedJobFlow successfully', function(done) {
        //uncomment below and update the code to test readFlowVolcanoShV1alpha1NamespacedJobFlow
        //instance.readFlowVolcanoShV1alpha1NamespacedJobFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowVolcanoShV1alpha1NamespacedJobFlowStatus', function() {
      it('should call readFlowVolcanoShV1alpha1NamespacedJobFlowStatus successfully', function(done) {
        //uncomment below and update the code to test readFlowVolcanoShV1alpha1NamespacedJobFlowStatus
        //instance.readFlowVolcanoShV1alpha1NamespacedJobFlowStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowVolcanoShV1alpha1NamespacedJobTemplate', function() {
      it('should call readFlowVolcanoShV1alpha1NamespacedJobTemplate successfully', function(done) {
        //uncomment below and update the code to test readFlowVolcanoShV1alpha1NamespacedJobTemplate
        //instance.readFlowVolcanoShV1alpha1NamespacedJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowVolcanoShV1alpha1NamespacedJobTemplateStatus', function() {
      it('should call readFlowVolcanoShV1alpha1NamespacedJobTemplateStatus successfully', function(done) {
        //uncomment below and update the code to test readFlowVolcanoShV1alpha1NamespacedJobTemplateStatus
        //instance.readFlowVolcanoShV1alpha1NamespacedJobTemplateStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowVolcanoShV1alpha1NamespacedJobFlow', function() {
      it('should call replaceFlowVolcanoShV1alpha1NamespacedJobFlow successfully', function(done) {
        //uncomment below and update the code to test replaceFlowVolcanoShV1alpha1NamespacedJobFlow
        //instance.replaceFlowVolcanoShV1alpha1NamespacedJobFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowVolcanoShV1alpha1NamespacedJobFlowStatus', function() {
      it('should call replaceFlowVolcanoShV1alpha1NamespacedJobFlowStatus successfully', function(done) {
        //uncomment below and update the code to test replaceFlowVolcanoShV1alpha1NamespacedJobFlowStatus
        //instance.replaceFlowVolcanoShV1alpha1NamespacedJobFlowStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowVolcanoShV1alpha1NamespacedJobTemplate', function() {
      it('should call replaceFlowVolcanoShV1alpha1NamespacedJobTemplate successfully', function(done) {
        //uncomment below and update the code to test replaceFlowVolcanoShV1alpha1NamespacedJobTemplate
        //instance.replaceFlowVolcanoShV1alpha1NamespacedJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowVolcanoShV1alpha1NamespacedJobTemplateStatus', function() {
      it('should call replaceFlowVolcanoShV1alpha1NamespacedJobTemplateStatus successfully', function(done) {
        //uncomment below and update the code to test replaceFlowVolcanoShV1alpha1NamespacedJobTemplateStatus
        //instance.replaceFlowVolcanoShV1alpha1NamespacedJobTemplateStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));