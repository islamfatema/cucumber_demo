@regression 
Feature: Login feature 

@regression-3
Scenario Outline: Verify Invalid Login for multiple users 
	When I enter <username> into username text fields on home screen 
	And I enter <password> into password text fields on home screen 
	And I click on login button on home screen 
	Then I verify that i am an invalid login page
	
	Examples:
    | username   					 	| password   		|
    | mohammad@technosoftacademy.io  	| test1234			|
    | chris@technosoftacademy.io    		| abc123			 	| 
