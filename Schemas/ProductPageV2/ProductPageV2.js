define("ProductPageV2", [], function() {
	return {
		entitySchemaName: "Product",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"ITSSchema2Detail402ae2fa": {
				"schemaName": "ITSSchema2Detail",
				"entitySchemaName": "ITSIndustryDetail",
				"filter": {
					"detailColumn": "ITSProduct",
					"masterColumn": "Id"
				}
			},
			"ITSSchema3Detailb7f49c29": {
				"schemaName": "ITSSchema3Detail",
				"entitySchemaName": "ITSAnalogueDetail",
				"filter": {
					"detailColumn": "ITSMainProduct",
					"masterColumn": "Id"
				}
			},
			"ITSAlternateNamesDetail": {
				"schemaName": "ITSAlternateNamesDetail",
				"entitySchemaName": "ITSAlternateNames",
				"filter": {
					"detailColumn": "ITSProduct",
					"masterColumn": "Id"
				}
			},
			"ITSSchema8Detail947ff480": {
				"schemaName": "ITSSchema8Detail",
				"entitySchemaName": "ITSApplicationDetailFix",
				"filter": {
					"detailColumn": "ITSProduct",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUPcdb74994-c8ba-4798-bf15-636664956638",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ITSStatus",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEANc922a39c-1363-4794-9763-a899afbe2a8e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ITSCompetitor",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPa9f4396a-dedf-485e-ab61-d72fcb8079e8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ITSProducer",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "Name",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 1,
						"column": 3,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Code",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "URL",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "IsArchive",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "ProductGeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "Category",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "TradeMark",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "insert",
				"name": "LOOKUP44b49ea5-e023-4c95-aae1-946c82673780",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProductCategoryBlock"
					},
					"bindTo": "ITSIndustry",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProductCategoryBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPa1e48f8e-1e7c-490a-a0c5-d6d6b0322858",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "ProductCategoryBlock"
					},
					"bindTo": "ITSTypeOfClient",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProductCategoryBlock",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP0155ae1b-998e-42f4-9f1d-5d395189ebbb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProductCategoryBlock"
					},
					"bindTo": "ITSApplication",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProductCategoryBlock",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPe4d01954-3b2e-4a21-b82b-32de7c6d1da9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "ProductCategoryBlock"
					},
					"bindTo": "ITSSalesVolume",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProductCategoryBlock",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUPf8914625-e2d2-4046-8fb7-6e118445c6fb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProductCategoryBlock"
					},
					"bindTo": "ITSTypeOfCooperation",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProductCategoryBlock",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "Price",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Tax",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Unit",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "insert",
				"name": "ITSSchema3Detailb7f49c29",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ProductGeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ITSAlternateNamesDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ProductGeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "ProductPricesTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "ProductSpecificationTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "insert",
				"name": "ProductSpecificationTabGroup62d77de8",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ProductSpecificationTabGroup62d77de8GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "ProductSpecificationTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductSpecificationTabGridLayout1bc47d59",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "ProductSpecificationTabGroup62d77de8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ITSPrice87f52a7f-8ae3-4c9b-bf9d-5268ea58c05f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSPrice"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ITSNaClContentc440187e-b110-4498-8dd2-089cf3e1ed3c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSNaClContent"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ITSIGCcontent10a5334c-3b67-4f30-95b0-d8db6e6ae2ee",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSIGCcontent"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ITSForm2c26d4c4-14b9-4a9b-a86f-4ba80587872e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSForm"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ITSRecipeDosage8018e575-ac51-414b-845d-1f2525b15adc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSRecipeDosage"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ITSTotalNitrogenc079b955-d1ab-469a-8e3f-f32199f358c3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSTotalNitrogen"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ITSAminoNitrogenContentf70c7a2a-f213-4535-824e-3816da1dce33",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSAminoNitrogenContent"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ITSFreeGlutamicAcidee3beb9b-de2b-4054-9756-b0ee9348bd8b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSFreeGlutamicAcid"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ITSTasteProfile0e106552-9ee0-49e4-8021-976730093717",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSTasteProfile"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ITSSolution5b82fb68-2dbf-4fee-a94c-5f45b0b87f59",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProductSpecificationTabGridLayout1bc47d59"
					},
					"bindTo": "ITSSolution"
				},
				"parentName": "ProductSpecificationTabGridLayout1bc47d59",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ITSSchema8Detail947ff480",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ProductSpecificationTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ITSSchema2Detail402ae2fa",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ProductSpecificationTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ProductFilesTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
