Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
    Given The app is loaded
    When User hasn’t specified a number
    Then A list of 32 events is displayed


Scenario: User can change the number of events they want to see
    Given A list of events is displayed by default number
    When User specified the number of events
    Then the specified the number of events are displayed