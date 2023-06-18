Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
    Given The app is loaded
    When the list of events has been displayed
    Then event’s details are invisible for the user

Scenario: User can expand an event to see its details
    Given The list of events is loaded
    When User click on the “Show details” button
    Then The user should be able to see the full event’s details

Scenario: User can collapse an event to hide its details
    Given The full event’s details are displayed to user
    When User click on the “Hide details” button
    Then The full event’s details are hidden

