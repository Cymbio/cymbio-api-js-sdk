# Cymbio.DefaultApi

All URIs are relative to *http://localhost:10010/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSupplier**](DefaultApi.md#getSupplier) | **GET** /suppliers/{supplierId} | 
[**getVariant**](DefaultApi.md#getVariant) | **GET** /variants/{variantId} | 
[**getVariants**](DefaultApi.md#getVariants) | **GET** /suppliers/{supplierId}/variants | 
[**importProducts**](DefaultApi.md#importProducts) | **POST** /suppliers/{supplierId}/importProducts | 
[**postSupplier**](DefaultApi.md#postSupplier) | **POST** /suppliers | 
[**postVariant**](DefaultApi.md#postVariant) | **POST** /suppliers/{supplierId}/variants | 


<a name="getSupplier"></a>
# **getSupplier**
> GetSupplierResponse getSupplier(supplierId, opts)



Returns a supplier by ID.

### Example
```javascript
import Cymbio from 'cymbio';
let defaultClient = Cymbio.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cymbio.DefaultApi();

let supplierId = 56; // Number | The id of the supplier to get.

let opts = { 
  'fields': "fields_example" // String | Comma-separated list of fields to include in the response.
};

apiInstance.getSupplier(supplierId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**| The id of the supplier to get. | 
 **fields** | **String**| Comma-separated list of fields to include in the response. | [optional] 

### Return type

[**GetSupplierResponse**](GetSupplierResponse.md)

### Authorization

[Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariant"></a>
# **getVariant**
> GetVariantResponse getVariant(variantId, opts)



Returns a variant by ID.

### Example
```javascript
import Cymbio from 'cymbio';
let defaultClient = Cymbio.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cymbio.DefaultApi();

let variantId = 56; // Number | The id of the variant to get.

let opts = { 
  'fields': "fields_example" // String | Comma-separated list of fields to include in the response.
};

apiInstance.getVariant(variantId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variantId** | **Number**| The id of the variant to get. | 
 **fields** | **String**| Comma-separated list of fields to include in the response. | [optional] 

### Return type

[**GetVariantResponse**](GetVariantResponse.md)

### Authorization

[Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariants"></a>
# **getVariants**
> GetVariantsResponse getVariants(supplierId, opts)



Returns all variants of a supplier.

### Example
```javascript
import Cymbio from 'cymbio';
let defaultClient = Cymbio.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cymbio.DefaultApi();

let supplierId = 56; // Number | The id of the supplier to add the variants to.

let opts = { 
  'fields': "fields_example" // String | Comma-separated list of fields to include in the response.
};

apiInstance.getVariants(supplierId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**| The id of the supplier to add the variants to. | 
 **fields** | **String**| Comma-separated list of fields to include in the response. | [optional] 

### Return type

[**GetVariantsResponse**](GetVariantsResponse.md)

### Authorization

[Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importProducts"></a>
# **importProducts**
> SuccessResponse importProducts(supplierId, opts)



Imports a file of variants and adds to the supplier

### Example
```javascript
import Cymbio from 'cymbio';
let defaultClient = Cymbio.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cymbio.DefaultApi();

let supplierId = 56; // Number | The id of the supplier to add the variants to.

let opts = { 
  'body': new Cymbio.ImportProductsRequest() // ImportProductsRequest | The file url and import parameters.
};

apiInstance.importProducts(supplierId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**| The id of the supplier to add the variants to. | 
 **body** | [**ImportProductsRequest**](ImportProductsRequest.md)| The file url and import parameters. | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSupplier"></a>
# **postSupplier**
> PostSupplierResponse postSupplier(opts)



Saves a new supplier.

### Example
```javascript
import Cymbio from 'cymbio';
let defaultClient = Cymbio.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cymbio.DefaultApi();

let opts = { 
  'body': new Cymbio.PostSupplierRequest() // PostSupplierRequest | The supplier to save.
};

apiInstance.postSupplier(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostSupplierRequest**](PostSupplierRequest.md)| The supplier to save. | [optional] 

### Return type

[**PostSupplierResponse**](PostSupplierResponse.md)

### Authorization

[Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postVariant"></a>
# **postVariant**
> PostVariantResponse postVariant(supplierId, opts)



Saves a new variant.

### Example
```javascript
import Cymbio from 'cymbio';
let defaultClient = Cymbio.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cymbio.DefaultApi();

let supplierId = 56; // Number | The id of the supplier to add the variants to.

let opts = { 
  'body': new Cymbio.PostVariantRequest() // PostVariantRequest | The variant to save.
};

apiInstance.postVariant(supplierId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**| The id of the supplier to add the variants to. | 
 **body** | [**PostVariantRequest**](PostVariantRequest.md)| The variant to save. | [optional] 

### Return type

[**PostVariantResponse**](PostVariantResponse.md)

### Authorization

[Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

