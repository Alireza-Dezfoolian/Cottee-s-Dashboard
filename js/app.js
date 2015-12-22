
//Test code by @Alireza Dezfoolian for Cottee

var pureprofileTest = angular.module("app", []);

pureprofileTest.controller('pureprofileCtrl', function($scope) {
    $scope.Math = window.Math;
    $scope.numbers = 
           [{
               number: '6.0', title: "Attention", text:"Will you ad get noticed?"
           }, {
               number: '7.2', title: "Brand Bonding", text:"How close the admake viewers feel about the brand"
           }];


    $scope.chartFilter = true;
    $scope.sampleDescrption = {"Valid respondents:": 90, "Eliminated:": 6, "Flatliners:":2, "Inconsistensy:":4, "Completes:":null};
    $scope.calculateComplete = function(){
       var sum = $scope.sampleDescrption["Valid respondents:"] + $scope.sampleDescrption["Flatliners:"] + $scope.sampleDescrption["Inconsistensy:"];
       $scope.sampleDescrption["Completes:"] = sum;
       return sum;
    }();

    //console.log($scope.calculateComplete(), $scope.sampleDescrption.complete);
    $scope.changeFilter = function(){
        $scope.chartFilter = !$scope.chartFilter;
    };
    $scope.deleteFilter = function(){
        $scope.chartFilter = true;
    };

    $scope.export = function(){
        alert("Charts exported!", $scope.overlayFilter)
    };

    $scope.bars = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"];
    $scope.horiz =  [["Product service", "Cordial (37 ads)", "38%", "20px"], ["Brand", "Cottes (15 ads)", "72%", "60px"], ["Country", "Australia(1473 ads)", "55%" , "100px"], ["Category", "Cold drinks (324 ads)", "55%", "140px"]];
});
