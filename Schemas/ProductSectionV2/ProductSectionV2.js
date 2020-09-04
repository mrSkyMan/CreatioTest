define("ProductSectionV2", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "Product",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		attributes: {
			"isAddProductToLeadEnabled": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
		},
		//ITSAddProductsToLead
		methods: {
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.isFilterExist();
			},
			isFilterExist: function(){
				var filters = this.getFilters();
				if(filters.collection.length > 0){
					if(filters.collection.items.some(item => item.collection.items.length>0)){
						this.set("isAddProductToLeadEnabled", true);
						return;
					}
					else{
						this.set("isAddProductToLeadEnabled", false);
						return;
					}
				}
				else{
					this.set("isAddProductToLeadEnabled", false);
					return;
				}
			},
			// isFilterExist: function(){
			// 	var filters = this.getFilters();
			// 	if(filters.collection.length > 0){
			// 		filters.collection.items.forEach(item => {
			// 			if(item.collection.items.length>0){
			// 				this.set("isAddProductToLeadEnabled", true);
			// 				return;
			// 			}
			// 		});
			// 		return;
			// 	}
			// 	else{
			// 		this.set("isAddProductToLeadEnabled", false);
			// 		return;
			// 	}
			// 	this.set("isAddProductToLeadEnabled", false);
			// 	return;
			// },
			
			addProducToLead: function(){
				debugger;
				var resp;
				var select = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "Product"
				});
				select.addColumn("Id");
				select.addColumn("ITSCompetitor");
				var filters = this.getFilters();
				select.filters.collection = filters.collection;
				select.getEntityCollection(function(response) {
					if (response && response.success && response.collection.collection.items) {
						resp = response.collection.collection;
						if(resp.items.length > 0){
							var ids = [];
							resp.items.forEach(item=>{ids.push({id: item.get("Id"), competitor: item.get("ITSCompetitor")});});
							var temp = JSON.stringify(ids);
							var args = {
								sysProcessName: "ITSAddProductsToLead",
								parameters: {
									SelectedProductsId: temp
								}
							};
							ProcessModuleUtilities.executeProcess(args);
						}
						else{
							this.console.log("Shittt");
						}
					}
				}, this);
				
			},
			onFilterUpdate: function(filterKey, filterItem, filtersValue){
				this.callParent(arguments);
				this.isFilterExist();
			},
			getSectionActions: function() {
                // Вызывается родительская реализация метода для получения
                // коллекции проинициализированных действий базовой страницы.
                var actionMenuItems = this.callParent(arguments);
                // Добавление линии-разделителя.
                actionMenuItems.addItem(this.getButtonMenuItem({
                    Type: "Terrasoft.MenuSeparator",
                    Caption: ""
                }));
                // Добавление пункта меню в список действий страницы редактирования.
                actionMenuItems.addItem(this.getButtonMenuItem({
                    // Привязка заголовка пункта меню к локализуемой строке схемы.
                    "Caption": {bindTo: "Resources.Strings.AddToLeadCaption"},
                    // Привязка метода-обработчика действия.
                    "Click": {bindTo: "addProducToLead"},
                    // Привязка свойства доступности пункта меню к значению, которое возвращает метод isRunning().
                    "Enabled": {bindTo: "isAddProductToLeadEnabled"}
                }));
                return actionMenuItems;
            }
		}
	};
});
