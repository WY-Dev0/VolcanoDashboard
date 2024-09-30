# Kubernetes.IoK8sApiCoreV1AzureFilePersistentVolumeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readOnly** | **Boolean** | readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] 
**secretName** | **String** | secretName is the name of secret that contains Azure Storage Account Name and Key | 
**secretNamespace** | **String** | secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod | [optional] 
**shareName** | **String** | shareName is the azure Share Name | 


