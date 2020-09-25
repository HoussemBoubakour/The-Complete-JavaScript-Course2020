


// BUDGET CONTROLLER
var budgetController = (function(){
   
    var Expense = function(id, description, value){

            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
            if(totalIncome > 0){
                this.percentage = Math.round ((this.value / totalIncome) * 100);
            }else{
                this.percentage = -1;
            }
    };

    Expense.prototype.getPercentages = function(){
        return this.percentage;
    };

    var Income = function(id, description, value){

        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function(type){
        var sum = 0;
        
        
        data.allitems[type].forEach(function(cur){
            sum += cur.value;
            });
            data.totals[type] = sum;
    };

    var data = {
        allitems: {
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        },
        budget : 0,
        percentage: -1
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

        deleteItem: function(type, id){
            var ids, index;

            ids = data.allitems[type].map(function(current){
                return current.id;
            });
            
            index = ids.indexOf(id);

            if (index !== -1){
                data.allitems[type].splice(index, 1);
            }
        },

        calculateBudget: function(){
            // 1. Calculate total

            calculateTotal('exp');
            calculateTotal('inc');

            // 2. Calculate the budget

            data.budget = data.totals.inc - data.totals.exp;

            // 3. Calculate percentage of income that we spent
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
           },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        calcultePercentages: function(){
            data.allitems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function(){
            var allPerc = data.allitems.exp.map(function(cur){
                return cur.getPercentages();
            });
            return allPerc;
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
        expensesContainer: '.expenses__list',
        budgetLabel:'.budget__value',
        incomeLabel:'.budget__income--value',
        expenseLabel:'.budget__expenses--value',
        percentageLabel:'.budget__expenses--percentage',
        container: '.container'
    };
    return {
        getInput : function(){
            return{
                type : document.querySelector(DOMStrings.inputType).value, // inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };  
        },
        addListItem: function(obj, type){
            var element,html,newHtml;

            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem:function(selectorID){

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },
        clearFields:function(){
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
        
            fieldsArr[0].focus();
        },
        displayBudget: function(obj){

            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget + '$';
            
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc + '$';
            
            document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp + '$';
            
        
            if(obj.percentage > 0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        
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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };

    var updateBudget = function(){
        
        // 1. Calculate the budget

        budgetController.calculateBudget();

        // 2. Return the budget

        var budget = budgetController.getBudget();

        // 3. Display the budget on the list
        UIController.displayBudget(budget);
    };

    var updatePercentages = function(){



        // 1. Calculate percentages

        budgetController.calcultePercentages();

        // 2. Read percentages from the budget controller

        var percentages = budgetController.getPercentages();

        // 3. Update the UI with the new percentages

        console.log(percentages);


    };

    var ctrlAddItem = function(){

        var input, newItem;
        // 1. Get the field input data
        input = UIController.getInput();
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
         // 2. Add the item to the budget controller
        newItem = budgetCrtl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
        UIController.addListItem(newItem, input.type);
        // 4. Clear the fields
        UIController.clearFields();
        // 5. Calculate and update budget
        updateBudget();
        // 6. Calculate and update percentages
        updatePercentages();
        }
        

    }

    var ctrlDeleteItem = function(event){
        var itemID, splitID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the item from the data structure

            budgetController.deleteItem(type, ID);

            // 2. Delete the item from the UI

            UIController.deleteListItem(itemID);

            // 3. Update and display the new budget

           updateBudget();

           // 4. Calculate and update percentages

            updatePercentages();

        }
    }

    return {
        init: function(){
            console.log('The application has started ! ');
            UIController.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setupEventListensers();

        }
    }


})(budgetController,UIController);

controller.init();

 