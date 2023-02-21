# flureenjs-ligo

1. Run fluree in docker
- Install docker and run `docker run -p 8090:8090 fluree/ledger:2.0.0-beta2`
- Open localhost:8090 for Fluree Admin UI
- Create a ledger named `test/new2`

2. Run flureenjs-ligo API 
- `npm install`
- `node index.js`
- Use postman to check GET: `localhost:3000/query` for query and POST: `localhost:3000/transact-user` for running transactions.

# Schema sample
The following are sample transactions:

```
[
 {
  "_id": "_collection",
  "name": "priceSpecification"
 },
 {
  "_id": "_collection",
  "name": "advanceBookingRequirement"
 },
 {
  "_id": "_collection",
  "name": "areaServed"
 },
 {
  "_id": "_collection",
  "name": "Brand"
 },
 {
  "_id": "_collection",
  "name": "manufacturer"
 },
 {
  "_id": "_collection",
  "name": "itemOfferred"
 },
 {
  "_id": "_collection",
  "name": "Offer"
 },
 {
  "_id": "_predicate",
  "name": "itemOffered/brand",
  "doc": "Brand name",
  "type": "ref",
  "restrictCollection": "brand"
 },
 {
  "_id": "_predicate",
  "name": "itemOffered/manufacturer",
  "doc": "Manufacturer",
  "type": "ref",
  "restrictCollection": "manufacturer"
 },
 {
  "_id": "_predicate",
  "name": "brand/name",
  "doc": "Brand name.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "manufacturer/legalName",
  "doc": "Manufacturer legal name.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "itemOffered/vehicleConfiguration",
  "doc": "Vehicle configuration.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "itemOffered/model",
  "doc": "Vehicle model.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "itemOffered/vehicleIdentificationNumber",
  "doc": "VIN number.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "itemOffered/modelDate",
  "doc": "Model Date.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "areaServed/postalCode",
  "doc": "price",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "priceSpecification/currency",
  "doc": "currency.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "priceSpecification/price",
  "doc": "price",
  "type": "int"
 },
 {
  "_id": "_predicate",
  "name": "advanceBookingRequirement/unitCode",
  "doc": "The image of item offered.",
  "type": "string"
 },
 {
  "_id": "_predicate",
  "name": "advanceBookingRequirement/value",
  "doc": "The offer's description",
  "type": "int"
 },
 {
  "_id": "_predicate",
  "name": "Offer/seller",
  "doc": "The seller ID.",
  "type": "string",
  "unique": true
 },
 {
  "_id": "_predicate",
  "name": "Offer/images",
  "doc": "The image of item offered.",
  "type": "string",
  "unique": true
 },
 {
  "_id": "_predicate",
  "name": "Offer/description",
  "doc": "The offer's description",
  "type": "string",
  "unique": true
 },
 {
  "_id": "_predicate",
  "name": "Offer/advanceBookingRequirement",
  "doc": "Advanced booking requirement for the offer",
  "type": "ref",
  "restrictCollection": "advanceBookingRequirement"
 },
 {
  "_id": "_predicate",
  "name": "Offer/priceSpecification",
  "doc": "Price specification for the offer",
  "type": "ref",
  "restrictCollection": "priceSpecification"
 },
 {
  "_id": "_predicate",
  "name": "Offer/areaServed",
  "doc": "Area served by the offer",
  "type": "ref",
  "restrictCollection": "areaServed"
 },
 {
  "_id": "_predicate",
  "name": "Offer/itemOffered",
  "doc": "Item offered by the offer.",
  "type": "ref",
  "restrictCollection": "itemOffered"
 }
]
```
# Input sample

```

[
    {
        "_id" : "Offer",
        
        "priceSpecification" : "priceSpecification$1"
                                            
    },
    {
        "_id" : "priceSpecification$1",
        "price" :1000,
        "currency" : "USD"
        
    }
]

```

```

[
    {
        "_id" : "Offer",
        
        "priceSpecification" : {
        "_id" : "priceSpecification$1",
        "price" :2000,
        "currency" : "USD"}
        
    }
    
]

```
