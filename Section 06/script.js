


// BUDGET CONTROLLER
var budgetController = (function(){
   
    var Expense = function(id, description, value){

            this.id = id;
            this.description = description;
            this.value = value;
    };
    var Income = function(id, description, value){

        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allitems: {
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem,ID;
           
            if(data.allitems[type].length > 0){
                ID = data.allitems[type][data.allitems[type].length-1].id + 1;
            }else{
                ID = 0;
            }

            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);

            }
            data.allitems[type].push(newItem);
            return newItem;
        },
        testing: function(){
            console.log(data);
        }
    };

})();




// UI CONTROLLER
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expense__list'
    };
    return {
        getInput : function(){
            return{
                type : document.querySelector(DOMStrings.inputType).value, // inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            };  
        },
        addListItem: function(obj, type){
            var element,html,newHtml;

            if(type === 'exp'){
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        getDOMStrings: function(){
            return DOMStrings;
        }
    };
})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCrtl,UICrtl){

    var setupEventListensers = function(){

        var DOM = UIController.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress',function(event){
                if(event.keyCode === 13 || event.which === 13){
    
                    ctrlAddItem();
    
                }
        });
    };

    

    var ctrlAddItem = function(){

        var input, newItem;
        // 1. Get the field input data
        input = UIController.getInput();
         // 2. Add the item to the budget controller
        newItem = budgetCrtl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
        UIController.addListItem(newItem, input.type);
        // 4. Calculate the budget
        // 5. Display the budget on the list
    }

    return {
        init: function(){
            console.log('The application has started ! ');
            setupEventListensers();

        }
    }


})(budgetController,UIController);

controller.init();

 