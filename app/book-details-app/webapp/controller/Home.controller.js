sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.app.bookdetailsapp.controller.Home", {
            onInit: function () {

            },
            onGoPress: function () {
                const oView = this.getView(),
                    oAuthor = oView.byId("idAuthorFilterValue"),
                    sAuthor = oAuthor.getValue(),
                    oTitle = oView.byId("idTitleFilterValue"),
                    sTitle = oTitle.getValue(),
                    oStock = oView.byId("idStockFilterValue"),
                    sStock = oStock.getValue(),
                    oPhone = oView.byId("idPhoneFilterValue"),
                    sPhone= oPhone.getValue(),

                    oTable = oView.byId("idBooksTable"),
                    aFilter = [];

                sAuthor ? aFilter.push(new Filter("author", FilterOperator.EQ, sAuthor)) : "";
                sTitle ? aFilter.push(new Filter("title", FilterOperator.EQ, sTitle)) : "";
                sStock ? aFilter.push(new Filter("stock", FilterOperator.EQ, sStock)) : "";
                sPhone? aFilter.push(new Filter("phone", FilterOperator.EQ, sPhone)) : "";
                oTable.getBinding("items").filter(aFilter)

            },
            onClearFilterPress:function(){
                const oView=this.getView(),
                oAuthor = oView.byId("idAuthorFilterValue").setValue(),
                oTitle = oView.byId("idTitleFilterValue").setValue(),
                oStock = oView.byId("idStockFilterValue").setValue(),
                oPhone = oView.byId("idPhoneFilterValue").setValue();
            }
        });
    });
