define("ITSSchema8Detail", ["ConfigurationEnums"], function(configurationEnums) {
	return {
		entitySchemaName: "ITSApplicationDetailFix",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
                // Тип операции — слияние.
                "operation": "merge",
                // Название элемента схемы, над которым производится действие.
                "name": "DataGrid",
                // Объект, свойства которого будут объединены со свойствами элемента схемы.
                "values": {
                    "rowDataItemMarkerColumnName": "ITSApplication"
                }
            },
            
		]/**SCHEMA_DIFF*/,
		methods: {
		    //Возвращает колонки, которые выбираются запросом.
            getGridDataColumns: function() {
                return {
                    "Id": {path: "Id"},
                    "Application": {path: "ITSApplication"},
                    "Application.Name": {path: "ITSApplication.Name"}
                };
            },

            //Конфигурирует и отображает модальное окно справочника.
            openApplicationLookup: function() {
                //Конфигурационный объект
                var config = {
                    // Название схемы объекта, записи которого будут отображены в справочнике.
                    entitySchemaName: "ITSApplication",
                    // Возможность множественного выбора.
                    multiSelect: true,
                    // Колонки, которые будут использованы в справочнике, например, для сортировки.
                    columns: ["Name"]
                };
                var MasterId = this.get("MasterRecordId");
                if (this.Ext.isEmpty(MasterId)) {
                    return;
                }
                // Экземпляр класса [EntitySchemaQuery].
                var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
                    // Установка корневой схемы.
                    rootSchemaName: this.entitySchemaName
                });
                // Добавление колонки [Id].
                esq.addColumn("Id");
                // Добавление колонки [Id] из схемы [Document].
                esq.addColumn("ITSApplication.Id", "ApplicationId");
                // Создание и добавление фильтров в коллекцию запроса.
                    esq.filters.add("filterAccount", this.Terrasoft.createColumnFilterWithParameter(
                        this.Terrasoft.ComparisonType.EQUAL, this.get("DetailColumnName"), MasterId));
                // Получение всей коллекции записей и отображение ее в модальном окне справочника.
                esq.getEntityCollection(function(result) {
                    var existsDocumentsCollection = [];
                    if (result.success) {
                        result.collection.each(function(item) {
                            existsDocumentsCollection.push(item.get("ApplicationId"));
                        });
                    }
                    // Добавление фильтра в конфигурационный объект.
                    if (existsDocumentsCollection.length > 0) {
                        var existsFilter = this.Terrasoft.createColumnInFilterWithParameters("Id",
                            existsDocumentsCollection);
                        existsFilter.comparisonType = this.Terrasoft.ComparisonType.NOT_EQUAL;
                        existsFilter.Name = "existsFilter";
                        config.filters = existsFilter;
                    }
                    // Вызов модального окна справочника
                    this.openLookup(config, this.addCallBack, this);
                }, this);
            },

            // Обработчик события сохранения страницы редактирования.
            onCardSaved: function() {
                this.openApplicationLookup();
            },

            //Открывает справочник документов в случае если страница редактирования заказа была ранее сохранена.
            addRecord: function() {
                var masterCardState = this.sandbox.publish("GetCardState", null, [this.sandbox.id]);
                var isNewRecord = (masterCardState.state === configurationEnums.CardStateV2.ADD ||
                masterCardState.state === configurationEnums.CardStateV2.COPY);
                if (isNewRecord === true) {
                    var args = {
                        isSilent: true,
                        messageTags: [this.sandbox.id]
                    };
                    this.sandbox.publish("SaveRecord", args, [this.sandbox.id]);
                    return;
                }
                this.openApplicationLookup();
            },

            // Добавление выбранных продуктов.
            addCallBack: function(args) {
                // Экземпляр класса пакетного запроса BatchQuery.
                var bq = this.Ext.create("Terrasoft.BatchQuery");
                var MasterId = this.get("MasterRecordId");
                // Коллекция выбранных в справочнике документов.
                this.selectedRows = args.selectedRows.getItems();
                // Коллекция, передаваемая в запрос.
                this.selectedItems = [];
                // Копирование необходимых данных.
                this.selectedRows.forEach(function(item) {
                    item.MasterId = MasterId;
                    item.ApplicationId = item.value;
                    bq.add(this.getDocumentInsertQuery(item));
                    this.selectedItems.push(item.value);
                }, this);
                // Выполнение пакетного запроса, если он не пустой.
                if (bq.queries.length) {
                    this.showBodyMask.call(this);
                    bq.execute(this.onDocumentInsert, this);
                }
            },

            //Возвращает запрос на добавление текущего объекта.
            getDocumentInsertQuery: function(item) {
                var insert = Ext.create("Terrasoft.InsertQuery", {
                    rootSchemaName: this.entitySchemaName
                });
                insert.setParameterValue(this.get("DetailColumnName"), item.MasterId, this.Terrasoft.DataValueType.GUID);
                insert.setParameterValue("ITSApplication", item.ApplicationId, this.Terrasoft.DataValueType.GUID);
                return insert;
            },

            //Метод, вызываемый при добавлении записей в реестр детали.
            onDocumentInsert: function(response) {
                this.hideBodyMask.call(this);
                this.beforeLoadGridData();
                var filterCollection = [];
                response.queryResults.forEach(function(item) {
                    filterCollection.push(item.id);
                });
                var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
                    rootSchemaName: this.entitySchemaName
                });
                this.initQueryColumns(esq);
                esq.filters.add("recordId", Terrasoft.createColumnInFilterWithParameters("Id", filterCollection));
                esq.getEntityCollection(function(response) {
                    this.afterLoadGridData();
                    if (response.success) {
                        var responseCollection = response.collection;
                        this.prepareResponseCollection(responseCollection);
                        this.getGridData().loadAll(responseCollection);
                    }
                }, this);
            },

            // Метод, вызываемый при удалении выбранных записей детали.
            deleteRecords: function() {
                var selectedRows = this.getSelectedItems();
                if (selectedRows.length > 0) {
                    this.set("SelectedRows", selectedRows);
                    this.callParent(arguments);
                }
            },
            
            getAddRecordButtonVisible: function() {
            	if(this.get("CardPageName") == "LeadPageV2"){
            		return false;
            	}
            	const isDetailEnabled = this.get("IsEnabled");
				if (isDetailEnabled === false) {
					return false;
				}
				const toolsVisible = this.getToolsVisible();
				if(toolsVisible === false){
					return false;
				}
				return true;
            },

            // Скрыть пункт меню [Копировать].
            getCopyRecordMenuItem: Terrasoft.emptyFn,
             // Скрыть пункт меню [Изменить].
            getEditRecordMenuItem: Terrasoft.emptyFn,
            getDeleteRecordMenuItem: function(){
            	if(this.get("CardPageName") == "LeadPageV2"){
            		return;
            	}
            	else{
            		return this.getButtonMenuItem({
						Caption: {"bindTo": "Resources.Strings.DeleteMenuCaption"},
						Click: {"bindTo": "deleteRecords"},
						Enabled: {bindTo: "isAnySelected"},
						Visible: {bindTo: "IsEnabled"}
					});
            	}
            },
            // Возвращает имя колонки по умолчанию для фильтра.
            getFilterDefaultColumnName: function() {
                return "ITSApplication";
            }
		
		}
	};
});
