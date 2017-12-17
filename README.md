# cymbio

Cymbio - JavaScript client for cymbio

- API version: 3.0.0
- Package version: 3.0.0

## Installation

To install via npm:

```shell
npm install cymbio --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Cymbio = require('cymbio');

var defaultClient = Cymbio.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
var Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = "YOUR ACCESS TOKEN"

var api = new Cymbio.DefaultApi()

var supplierId = 56; // {Number} The id of the supplier to get.

var opts = { 
  'fields': "fields_example" // {String} Comma-separated list of fields to include in the response.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSupplier(supplierId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:10010/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Cymbio.DefaultApi* | [**getSupplier**](docs/DefaultApi.md#getSupplier) | **GET** /suppliers/{supplierId} | 
*Cymbio.DefaultApi* | [**getVariant**](docs/DefaultApi.md#getVariant) | **GET** /variants/{variantId} | 
*Cymbio.DefaultApi* | [**getVariants**](docs/DefaultApi.md#getVariants) | **GET** /suppliers/{supplierId}/variants | 
*Cymbio.DefaultApi* | [**importProducts**](docs/DefaultApi.md#importProducts) | **POST** /suppliers/{supplierId}/importProducts | 
*Cymbio.DefaultApi* | [**postSupplier**](docs/DefaultApi.md#postSupplier) | **POST** /suppliers | 
*Cymbio.DefaultApi* | [**postVariant**](docs/DefaultApi.md#postVariant) | **POST** /suppliers/{supplierId}/variants | 


## Documentation for Models

 - [Cymbio.ErrorResponse](docs/ErrorResponse.md)
 - [Cymbio.GetSupplierResponse](docs/GetSupplierResponse.md)
 - [Cymbio.GetVariantResponse](docs/GetVariantResponse.md)
 - [Cymbio.GetVariantsResponse](docs/GetVariantsResponse.md)
 - [Cymbio.ImportProductsRequest](docs/ImportProductsRequest.md)
 - [Cymbio.ImportProductsSchemaField](docs/ImportProductsSchemaField.md)
 - [Cymbio.PostSupplierRequest](docs/PostSupplierRequest.md)
 - [Cymbio.PostSupplierResponse](docs/PostSupplierResponse.md)
 - [Cymbio.PostVariantOption](docs/PostVariantOption.md)
 - [Cymbio.PostVariantProperty](docs/PostVariantProperty.md)
 - [Cymbio.PostVariantRequest](docs/PostVariantRequest.md)
 - [Cymbio.PostVariantResponse](docs/PostVariantResponse.md)
 - [Cymbio.SuccessResponse](docs/SuccessResponse.md)


## Documentation for Authorization


### Oauth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - read:suppliers: Read Suppliers scope
  - write:suppliers: Write Suppliers scope
  - read:variants: Read Variants scope
  - write:variants: Write Variants scope

