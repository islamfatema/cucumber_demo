@regression 
Feature: Login feature 

@regression-2 
Scenario: Verify Invalid Login two 
	When I enter chris@technosoftacademy.io into username text fields on home screen 
	And I enter abc1234 into password text fields on home screen 
	And I click on login button on home screen 
	Then I verify that i am an invalid login page 
#	And I close the default browser 