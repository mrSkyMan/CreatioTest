define("LeadPageV2", [], function() {
	return {
		entitySchemaName: "Lead",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"ITSSchema2Detailcac7f8e1": {
				"schemaName": "ITSSchema2Detail",
				"entitySchemaName": "ITSIndustryDetail",
				"filter": {
					"detailColumn": "ITSAccount",
					"masterColumn": "QualifiedAccount"
				}
			},
			"ITSSchema2Detaila02d588f": {
				"schemaName": "ITSSchema2Detail",
				"entitySchemaName": "ITSIndustryDetail",
				"filter": {
					"detailColumn": "ITSProduct",
					"masterColumn": "ITSMainProduct"
				}
			},
			"ITSSchema3Detaile47558a1": {
				"schemaName": "ITSSchema3Detail",
				"entitySchemaName": "ITSAnalogueDetail",
				"filter": {
					"detailColumn": "ITSMainProduct",
					"masterColumn": "ITSMainProduct"
				}
			},
			"ITSPreviousUsageDetail": {
				"schemaName": "ITSPreviousUsageDetail",
				"entitySchemaName": "ITSPreviousUsage",
				"filter": {
					"detailColumn": "ITSLead",
					"masterColumn": "Id"
				}
			},
			"ITSSchema4Detail2abea960": {
				"schemaName": "ITSSchema4Detail",
				"entitySchemaName": "ITSCompetitorAnalogue",
				"filter": {
					"detailColumn": "ITSLead",
					"masterColumn": "Id"
				}
			},
			"ITSSchema5Detailbf47bb07": {
				"schemaName": "ITSSchema5Detail",
				"entitySchemaName": "ITSOurAnalogue",
				"filter": {
					"detailColumn": "ITSLead",
					"masterColumn": "Id"
				}
			},
			"ITSSchema8Detail57b0f80f": {
				"schemaName": "ITSSchema8Detail",
				"entitySchemaName": "ITSApplicationDetailFix",
				"filter": {
					"detailColumn": "ITSAccount",
					"masterColumn": "QualifiedAccount"
				}
			},
			"ITSSchema8Detail5fed36cc": {
				"schemaName": "ITSSchema8Detail",
				"entitySchemaName": "ITSApplicationDetailFix",
				"filter": {
					"detailColumn": "ITSProduct",
					"masterColumn": "ITSMainProduct"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "NewLeadType",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "NewLeadDisqualifyReason",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "NewLeadDisqualifyReason",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "LeadRegisterMethodInProfile",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadWebFormInProfile",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "LeadWebFormInProfile",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "LeadBudget",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadCreatedOn",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadOwner",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6
					}
				}
			},
			{
				"operation": "merge",
				"name": "SalesChannel",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7
					}
				}
			},
			{
				"operation": "move",
				"name": "SalesChannel",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "LeadPredictiveScoreContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8
					}
				}
			},
			{
				"operation": "merge",
				"name": "Partner",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9
					}
				}
			},
			{
				"operation": "insert",
				"name": "STRING82834af0-7a67-473a-99b7-cd3e37885a73",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ITSQuantity",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "SearchInSocialNetworksButton",
				"values": {
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 10,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "SearchInSocialNetworksButton",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "SearchInGoogleButton",
				"values": {
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 22,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "SearchInGoogleButton",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "Contact",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Account",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Account",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "Job",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "EmployeesNumber",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "MobilePhone",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "MobilePhone",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "merge",
				"name": "Country",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 12,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "Email",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "Email",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "merge",
				"name": "Website",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 12,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "CountryStr",
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
				"name": "RegionStr",
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
				"name": "CityStr",
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
				"name": "Tabbd50c410TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbd50c410TabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabbd50c410TabLabelGroupf7cd8a28",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbd50c410TabLabelGroupf7cd8a28GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbd50c410TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabbd50c410TabLabelGridLayout64d29cdb",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbd50c410TabLabelGroupf7cd8a28",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP828da883-7f9b-4101-98af-4d628e625bfb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabbd50c410TabLabelGridLayout64d29cdb"
					},
					"bindTo": "ITSMainProduct",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabbd50c410TabLabelGridLayout64d29cdb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ITSSchema8Detail5fed36cc",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabbd50c410TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ITSSchema2Detaila02d588f",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabbd50c410TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ITSSchema3Detaile47558a1",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabbd50c410TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ITSPreviousUsageDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabbd50c410TabLabel",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab624549cbTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab624549cbTabLabelTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ITSSchema4Detail2abea960",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab624549cbTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ITSSchema5Detailbf47bb07",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab624549cbTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "NeedInfoTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "LeadTypeStatus",
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
				"operation": "insert",
				"name": "ITSSchema8Detail57b0f80f",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "NeedInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ITSSchema2Detailcac7f8e1",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "NeedInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "LeadEngagementTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "LeadMedium",
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
				"name": "BpmRef",
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
				"operation": "move",
				"name": "BpmRef",
				"parentName": "LeadPageSourceInfoBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "LeadSource",
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
				"name": "WebForm",
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
				"operation": "move",
				"name": "WebForm",
				"parentName": "LeadPageSourceInfoBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "RegisterMethod",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "DealSpecificsTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "Budget",
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
				"name": "NextActualizationDate",
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
				"name": "OpportunityOrOrder",
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
				"operation": "move",
				"name": "OpportunityOrOrder",
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "MeetingDate",
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
				"name": "DecisionDate",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "SalesOwner",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "SalesOwner",
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "OpportunityDepartment",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 9
				}
			},
			{
				"operation": "merge",
				"name": "NotesTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 5
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
