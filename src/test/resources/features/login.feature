
@regression 
Feature: Login feature 

Background:
#	Given I open the default browser 
	And I am on home page
	
@regression-1 
Scenario: Verify valid Login
  When I click on login page
	And I enter islamfatema88@yahoo.com into username text fields on home screen
	And I enter test1234 into password text fields on home screen 
	And I click on login button on home screen 
	Then I verify that I am in valid login page 
#	And I close the default browser 